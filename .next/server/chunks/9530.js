exports.id = 9530;
exports.ids = [9530];
exports.modules = {

/***/ 80489:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    unstable_getImgProps: function() {
        return unstable_getImgProps;
    }
});
const _interop_require_default = __webpack_require__(82147);
const _getimgprops = __webpack_require__(1830);
const _warnonce = __webpack_require__(98658);
const _imagecomponent = __webpack_require__(73380);
const _imageloader = /*#__PURE__*/ _interop_require_default._(__webpack_require__(35246));
const unstable_getImgProps = (imgProps)=>{
    (0, _warnonce.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");
    const { props } = (0, _getimgprops.getImgProps)(imgProps, {
        defaultLoader: _imageloader.default,
        // This is replaced by webpack define plugin
        imgConf: {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","dangerouslyAllowSVG":false,"unoptimized":false}
    });
    for (const [key, value] of Object.entries(props)){
        if (value === undefined) {
            delete props[key];
        }
    }
    return {
        props
    };
};
const _default = _imagecomponent.Image; //# sourceMappingURL=image-external.js.map


/***/ }),

/***/ 35439:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.createFileSystemAdapter = exports.FILE_SYSTEM_ADAPTER = void 0;
const fs = __webpack_require__(57147);
exports.FILE_SYSTEM_ADAPTER = {
    lstat: fs.lstat,
    stat: fs.stat,
    lstatSync: fs.lstatSync,
    statSync: fs.statSync,
    readdir: fs.readdir,
    readdirSync: fs.readdirSync
};
function createFileSystemAdapter(fsMethods) {
    if (fsMethods === undefined) {
        return exports.FILE_SYSTEM_ADAPTER;
    }
    return Object.assign(Object.assign({}, exports.FILE_SYSTEM_ADAPTER), fsMethods);
}
exports.createFileSystemAdapter = createFileSystemAdapter;


/***/ }),

/***/ 70197:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.IS_SUPPORT_READDIR_WITH_FILE_TYPES = void 0;
const NODE_PROCESS_VERSION_PARTS = process.versions.node.split(".");
if (NODE_PROCESS_VERSION_PARTS[0] === undefined || NODE_PROCESS_VERSION_PARTS[1] === undefined) {
    throw new Error(`Unexpected behavior. The 'process.versions.node' variable has invalid value: ${process.versions.node}`);
}
const MAJOR_VERSION = Number.parseInt(NODE_PROCESS_VERSION_PARTS[0], 10);
const MINOR_VERSION = Number.parseInt(NODE_PROCESS_VERSION_PARTS[1], 10);
const SUPPORTED_MAJOR_VERSION = 10;
const SUPPORTED_MINOR_VERSION = 10;
const IS_MATCHED_BY_MAJOR = MAJOR_VERSION > SUPPORTED_MAJOR_VERSION;
const IS_MATCHED_BY_MAJOR_AND_MINOR = MAJOR_VERSION === SUPPORTED_MAJOR_VERSION && MINOR_VERSION >= SUPPORTED_MINOR_VERSION;
/**
 * IS `true` for Node.js 10.10 and greater.
 */ exports.IS_SUPPORT_READDIR_WITH_FILE_TYPES = IS_MATCHED_BY_MAJOR || IS_MATCHED_BY_MAJOR_AND_MINOR;


/***/ }),

/***/ 89819:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Settings = exports.scandirSync = exports.scandir = void 0;
const async = __webpack_require__(83074);
const sync = __webpack_require__(18121);
const settings_1 = __webpack_require__(35042);
exports.Settings = settings_1.default;
function scandir(path, optionsOrSettingsOrCallback, callback) {
    if (typeof optionsOrSettingsOrCallback === "function") {
        async.read(path, getSettings(), optionsOrSettingsOrCallback);
        return;
    }
    async.read(path, getSettings(optionsOrSettingsOrCallback), callback);
}
exports.scandir = scandir;
function scandirSync(path, optionsOrSettings) {
    const settings = getSettings(optionsOrSettings);
    return sync.read(path, settings);
}
exports.scandirSync = scandirSync;
function getSettings(settingsOrOptions = {}) {
    if (settingsOrOptions instanceof settings_1.default) {
        return settingsOrOptions;
    }
    return new settings_1.default(settingsOrOptions);
}


/***/ }),

/***/ 83074:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.readdir = exports.readdirWithFileTypes = exports.read = void 0;
const fsStat = __webpack_require__(69329);
const rpl = __webpack_require__(23225);
const constants_1 = __webpack_require__(70197);
const utils = __webpack_require__(41979);
const common = __webpack_require__(87055);
function read(directory, settings, callback) {
    if (!settings.stats && constants_1.IS_SUPPORT_READDIR_WITH_FILE_TYPES) {
        readdirWithFileTypes(directory, settings, callback);
        return;
    }
    readdir(directory, settings, callback);
}
exports.read = read;
function readdirWithFileTypes(directory, settings, callback) {
    settings.fs.readdir(directory, {
        withFileTypes: true
    }, (readdirError, dirents)=>{
        if (readdirError !== null) {
            callFailureCallback(callback, readdirError);
            return;
        }
        const entries = dirents.map((dirent)=>({
                dirent,
                name: dirent.name,
                path: common.joinPathSegments(directory, dirent.name, settings.pathSegmentSeparator)
            }));
        if (!settings.followSymbolicLinks) {
            callSuccessCallback(callback, entries);
            return;
        }
        const tasks = entries.map((entry)=>makeRplTaskEntry(entry, settings));
        rpl(tasks, (rplError, rplEntries)=>{
            if (rplError !== null) {
                callFailureCallback(callback, rplError);
                return;
            }
            callSuccessCallback(callback, rplEntries);
        });
    });
}
exports.readdirWithFileTypes = readdirWithFileTypes;
function makeRplTaskEntry(entry, settings) {
    return (done)=>{
        if (!entry.dirent.isSymbolicLink()) {
            done(null, entry);
            return;
        }
        settings.fs.stat(entry.path, (statError, stats)=>{
            if (statError !== null) {
                if (settings.throwErrorOnBrokenSymbolicLink) {
                    done(statError);
                    return;
                }
                done(null, entry);
                return;
            }
            entry.dirent = utils.fs.createDirentFromStats(entry.name, stats);
            done(null, entry);
        });
    };
}
function readdir(directory, settings, callback) {
    settings.fs.readdir(directory, (readdirError, names)=>{
        if (readdirError !== null) {
            callFailureCallback(callback, readdirError);
            return;
        }
        const tasks = names.map((name)=>{
            const path = common.joinPathSegments(directory, name, settings.pathSegmentSeparator);
            return (done)=>{
                fsStat.stat(path, settings.fsStatSettings, (error, stats)=>{
                    if (error !== null) {
                        done(error);
                        return;
                    }
                    const entry = {
                        name,
                        path,
                        dirent: utils.fs.createDirentFromStats(name, stats)
                    };
                    if (settings.stats) {
                        entry.stats = stats;
                    }
                    done(null, entry);
                });
            };
        });
        rpl(tasks, (rplError, entries)=>{
            if (rplError !== null) {
                callFailureCallback(callback, rplError);
                return;
            }
            callSuccessCallback(callback, entries);
        });
    });
}
exports.readdir = readdir;
function callFailureCallback(callback, error) {
    callback(error);
}
function callSuccessCallback(callback, result) {
    callback(null, result);
}


/***/ }),

/***/ 87055:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.joinPathSegments = void 0;
function joinPathSegments(a, b, separator) {
    /**
     * The correct handling of cases when the first segment is a root (`/`, `C:/`) or UNC path (`//?/C:/`).
     */ if (a.endsWith(separator)) {
        return a + b;
    }
    return a + separator + b;
}
exports.joinPathSegments = joinPathSegments;


/***/ }),

/***/ 18121:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.readdir = exports.readdirWithFileTypes = exports.read = void 0;
const fsStat = __webpack_require__(69329);
const constants_1 = __webpack_require__(70197);
const utils = __webpack_require__(41979);
const common = __webpack_require__(87055);
function read(directory, settings) {
    if (!settings.stats && constants_1.IS_SUPPORT_READDIR_WITH_FILE_TYPES) {
        return readdirWithFileTypes(directory, settings);
    }
    return readdir(directory, settings);
}
exports.read = read;
function readdirWithFileTypes(directory, settings) {
    const dirents = settings.fs.readdirSync(directory, {
        withFileTypes: true
    });
    return dirents.map((dirent)=>{
        const entry = {
            dirent,
            name: dirent.name,
            path: common.joinPathSegments(directory, dirent.name, settings.pathSegmentSeparator)
        };
        if (entry.dirent.isSymbolicLink() && settings.followSymbolicLinks) {
            try {
                const stats = settings.fs.statSync(entry.path);
                entry.dirent = utils.fs.createDirentFromStats(entry.name, stats);
            } catch (error) {
                if (settings.throwErrorOnBrokenSymbolicLink) {
                    throw error;
                }
            }
        }
        return entry;
    });
}
exports.readdirWithFileTypes = readdirWithFileTypes;
function readdir(directory, settings) {
    const names = settings.fs.readdirSync(directory);
    return names.map((name)=>{
        const entryPath = common.joinPathSegments(directory, name, settings.pathSegmentSeparator);
        const stats = fsStat.statSync(entryPath, settings.fsStatSettings);
        const entry = {
            name,
            path: entryPath,
            dirent: utils.fs.createDirentFromStats(name, stats)
        };
        if (settings.stats) {
            entry.stats = stats;
        }
        return entry;
    });
}
exports.readdir = readdir;


/***/ }),

/***/ 35042:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const path = __webpack_require__(71017);
const fsStat = __webpack_require__(69329);
const fs = __webpack_require__(35439);
class Settings {
    constructor(_options = {}){
        this._options = _options;
        this.followSymbolicLinks = this._getValue(this._options.followSymbolicLinks, false);
        this.fs = fs.createFileSystemAdapter(this._options.fs);
        this.pathSegmentSeparator = this._getValue(this._options.pathSegmentSeparator, path.sep);
        this.stats = this._getValue(this._options.stats, false);
        this.throwErrorOnBrokenSymbolicLink = this._getValue(this._options.throwErrorOnBrokenSymbolicLink, true);
        this.fsStatSettings = new fsStat.Settings({
            followSymbolicLink: this.followSymbolicLinks,
            fs: this.fs,
            throwErrorOnBrokenSymbolicLink: this.throwErrorOnBrokenSymbolicLink
        });
    }
    _getValue(option, value) {
        return option !== null && option !== void 0 ? option : value;
    }
}
exports["default"] = Settings;


/***/ }),

/***/ 55908:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.createDirentFromStats = void 0;
class DirentFromStats {
    constructor(name, stats){
        this.name = name;
        this.isBlockDevice = stats.isBlockDevice.bind(stats);
        this.isCharacterDevice = stats.isCharacterDevice.bind(stats);
        this.isDirectory = stats.isDirectory.bind(stats);
        this.isFIFO = stats.isFIFO.bind(stats);
        this.isFile = stats.isFile.bind(stats);
        this.isSocket = stats.isSocket.bind(stats);
        this.isSymbolicLink = stats.isSymbolicLink.bind(stats);
    }
}
function createDirentFromStats(name, stats) {
    return new DirentFromStats(name, stats);
}
exports.createDirentFromStats = createDirentFromStats;


/***/ }),

/***/ 41979:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.fs = void 0;
const fs = __webpack_require__(55908);
exports.fs = fs;


/***/ }),

/***/ 36924:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.createFileSystemAdapter = exports.FILE_SYSTEM_ADAPTER = void 0;
const fs = __webpack_require__(57147);
exports.FILE_SYSTEM_ADAPTER = {
    lstat: fs.lstat,
    stat: fs.stat,
    lstatSync: fs.lstatSync,
    statSync: fs.statSync
};
function createFileSystemAdapter(fsMethods) {
    if (fsMethods === undefined) {
        return exports.FILE_SYSTEM_ADAPTER;
    }
    return Object.assign(Object.assign({}, exports.FILE_SYSTEM_ADAPTER), fsMethods);
}
exports.createFileSystemAdapter = createFileSystemAdapter;


/***/ }),

/***/ 69329:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.statSync = exports.stat = exports.Settings = void 0;
const async = __webpack_require__(95942);
const sync = __webpack_require__(95986);
const settings_1 = __webpack_require__(76488);
exports.Settings = settings_1.default;
function stat(path, optionsOrSettingsOrCallback, callback) {
    if (typeof optionsOrSettingsOrCallback === "function") {
        async.read(path, getSettings(), optionsOrSettingsOrCallback);
        return;
    }
    async.read(path, getSettings(optionsOrSettingsOrCallback), callback);
}
exports.stat = stat;
function statSync(path, optionsOrSettings) {
    const settings = getSettings(optionsOrSettings);
    return sync.read(path, settings);
}
exports.statSync = statSync;
function getSettings(settingsOrOptions = {}) {
    if (settingsOrOptions instanceof settings_1.default) {
        return settingsOrOptions;
    }
    return new settings_1.default(settingsOrOptions);
}


/***/ }),

/***/ 95942:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.read = void 0;
function read(path, settings, callback) {
    settings.fs.lstat(path, (lstatError, lstat)=>{
        if (lstatError !== null) {
            callFailureCallback(callback, lstatError);
            return;
        }
        if (!lstat.isSymbolicLink() || !settings.followSymbolicLink) {
            callSuccessCallback(callback, lstat);
            return;
        }
        settings.fs.stat(path, (statError, stat)=>{
            if (statError !== null) {
                if (settings.throwErrorOnBrokenSymbolicLink) {
                    callFailureCallback(callback, statError);
                    return;
                }
                callSuccessCallback(callback, lstat);
                return;
            }
            if (settings.markSymbolicLink) {
                stat.isSymbolicLink = ()=>true;
            }
            callSuccessCallback(callback, stat);
        });
    });
}
exports.read = read;
function callFailureCallback(callback, error) {
    callback(error);
}
function callSuccessCallback(callback, result) {
    callback(null, result);
}


/***/ }),

/***/ 95986:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.read = void 0;
function read(path, settings) {
    const lstat = settings.fs.lstatSync(path);
    if (!lstat.isSymbolicLink() || !settings.followSymbolicLink) {
        return lstat;
    }
    try {
        const stat = settings.fs.statSync(path);
        if (settings.markSymbolicLink) {
            stat.isSymbolicLink = ()=>true;
        }
        return stat;
    } catch (error) {
        if (!settings.throwErrorOnBrokenSymbolicLink) {
            return lstat;
        }
        throw error;
    }
}
exports.read = read;


/***/ }),

/***/ 76488:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const fs = __webpack_require__(36924);
class Settings {
    constructor(_options = {}){
        this._options = _options;
        this.followSymbolicLink = this._getValue(this._options.followSymbolicLink, true);
        this.fs = fs.createFileSystemAdapter(this._options.fs);
        this.markSymbolicLink = this._getValue(this._options.markSymbolicLink, false);
        this.throwErrorOnBrokenSymbolicLink = this._getValue(this._options.throwErrorOnBrokenSymbolicLink, true);
    }
    _getValue(option, value) {
        return option !== null && option !== void 0 ? option : value;
    }
}
exports["default"] = Settings;


/***/ }),

/***/ 15238:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Settings = exports.walkStream = exports.walkSync = exports.walk = void 0;
const async_1 = __webpack_require__(71524);
const stream_1 = __webpack_require__(57013);
const sync_1 = __webpack_require__(57842);
const settings_1 = __webpack_require__(73670);
exports.Settings = settings_1.default;
function walk(directory, optionsOrSettingsOrCallback, callback) {
    if (typeof optionsOrSettingsOrCallback === "function") {
        new async_1.default(directory, getSettings()).read(optionsOrSettingsOrCallback);
        return;
    }
    new async_1.default(directory, getSettings(optionsOrSettingsOrCallback)).read(callback);
}
exports.walk = walk;
function walkSync(directory, optionsOrSettings) {
    const settings = getSettings(optionsOrSettings);
    const provider = new sync_1.default(directory, settings);
    return provider.read();
}
exports.walkSync = walkSync;
function walkStream(directory, optionsOrSettings) {
    const settings = getSettings(optionsOrSettings);
    const provider = new stream_1.default(directory, settings);
    return provider.read();
}
exports.walkStream = walkStream;
function getSettings(settingsOrOptions = {}) {
    if (settingsOrOptions instanceof settings_1.default) {
        return settingsOrOptions;
    }
    return new settings_1.default(settingsOrOptions);
}


/***/ }),

/***/ 71524:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const async_1 = __webpack_require__(18597);
class AsyncProvider {
    constructor(_root, _settings){
        this._root = _root;
        this._settings = _settings;
        this._reader = new async_1.default(this._root, this._settings);
        this._storage = [];
    }
    read(callback) {
        this._reader.onError((error)=>{
            callFailureCallback(callback, error);
        });
        this._reader.onEntry((entry)=>{
            this._storage.push(entry);
        });
        this._reader.onEnd(()=>{
            callSuccessCallback(callback, this._storage);
        });
        this._reader.read();
    }
}
exports["default"] = AsyncProvider;
function callFailureCallback(callback, error) {
    callback(error);
}
function callSuccessCallback(callback, entries) {
    callback(null, entries);
}


/***/ }),

/***/ 57013:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const stream_1 = __webpack_require__(12781);
const async_1 = __webpack_require__(18597);
class StreamProvider {
    constructor(_root, _settings){
        this._root = _root;
        this._settings = _settings;
        this._reader = new async_1.default(this._root, this._settings);
        this._stream = new stream_1.Readable({
            objectMode: true,
            read: ()=>{},
            destroy: ()=>{
                if (!this._reader.isDestroyed) {
                    this._reader.destroy();
                }
            }
        });
    }
    read() {
        this._reader.onError((error)=>{
            this._stream.emit("error", error);
        });
        this._reader.onEntry((entry)=>{
            this._stream.push(entry);
        });
        this._reader.onEnd(()=>{
            this._stream.push(null);
        });
        this._reader.read();
        return this._stream;
    }
}
exports["default"] = StreamProvider;


/***/ }),

/***/ 57842:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const sync_1 = __webpack_require__(77499);
class SyncProvider {
    constructor(_root, _settings){
        this._root = _root;
        this._settings = _settings;
        this._reader = new sync_1.default(this._root, this._settings);
    }
    read() {
        return this._reader.read();
    }
}
exports["default"] = SyncProvider;


/***/ }),

/***/ 18597:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const events_1 = __webpack_require__(82361);
const fsScandir = __webpack_require__(89819);
const fastq = __webpack_require__(97719);
const common = __webpack_require__(5265);
const reader_1 = __webpack_require__(70961);
class AsyncReader extends reader_1.default {
    constructor(_root, _settings){
        super(_root, _settings);
        this._settings = _settings;
        this._scandir = fsScandir.scandir;
        this._emitter = new events_1.EventEmitter();
        this._queue = fastq(this._worker.bind(this), this._settings.concurrency);
        this._isFatalError = false;
        this._isDestroyed = false;
        this._queue.drain = ()=>{
            if (!this._isFatalError) {
                this._emitter.emit("end");
            }
        };
    }
    read() {
        this._isFatalError = false;
        this._isDestroyed = false;
        setImmediate(()=>{
            this._pushToQueue(this._root, this._settings.basePath);
        });
        return this._emitter;
    }
    get isDestroyed() {
        return this._isDestroyed;
    }
    destroy() {
        if (this._isDestroyed) {
            throw new Error("The reader is already destroyed");
        }
        this._isDestroyed = true;
        this._queue.killAndDrain();
    }
    onEntry(callback) {
        this._emitter.on("entry", callback);
    }
    onError(callback) {
        this._emitter.once("error", callback);
    }
    onEnd(callback) {
        this._emitter.once("end", callback);
    }
    _pushToQueue(directory, base) {
        const queueItem = {
            directory,
            base
        };
        this._queue.push(queueItem, (error)=>{
            if (error !== null) {
                this._handleError(error);
            }
        });
    }
    _worker(item, done) {
        this._scandir(item.directory, this._settings.fsScandirSettings, (error, entries)=>{
            if (error !== null) {
                done(error, undefined);
                return;
            }
            for (const entry of entries){
                this._handleEntry(entry, item.base);
            }
            done(null, undefined);
        });
    }
    _handleError(error) {
        if (this._isDestroyed || !common.isFatalError(this._settings, error)) {
            return;
        }
        this._isFatalError = true;
        this._isDestroyed = true;
        this._emitter.emit("error", error);
    }
    _handleEntry(entry, base) {
        if (this._isDestroyed || this._isFatalError) {
            return;
        }
        const fullpath = entry.path;
        if (base !== undefined) {
            entry.path = common.joinPathSegments(base, entry.name, this._settings.pathSegmentSeparator);
        }
        if (common.isAppliedFilter(this._settings.entryFilter, entry)) {
            this._emitEntry(entry);
        }
        if (entry.dirent.isDirectory() && common.isAppliedFilter(this._settings.deepFilter, entry)) {
            this._pushToQueue(fullpath, base === undefined ? undefined : entry.path);
        }
    }
    _emitEntry(entry) {
        this._emitter.emit("entry", entry);
    }
}
exports["default"] = AsyncReader;


/***/ }),

/***/ 5265:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.joinPathSegments = exports.replacePathSegmentSeparator = exports.isAppliedFilter = exports.isFatalError = void 0;
function isFatalError(settings, error) {
    if (settings.errorFilter === null) {
        return true;
    }
    return !settings.errorFilter(error);
}
exports.isFatalError = isFatalError;
function isAppliedFilter(filter, value) {
    return filter === null || filter(value);
}
exports.isAppliedFilter = isAppliedFilter;
function replacePathSegmentSeparator(filepath, separator) {
    return filepath.split(/[/\\]/).join(separator);
}
exports.replacePathSegmentSeparator = replacePathSegmentSeparator;
function joinPathSegments(a, b, separator) {
    if (a === "") {
        return b;
    }
    /**
     * The correct handling of cases when the first segment is a root (`/`, `C:/`) or UNC path (`//?/C:/`).
     */ if (a.endsWith(separator)) {
        return a + b;
    }
    return a + separator + b;
}
exports.joinPathSegments = joinPathSegments;


/***/ }),

/***/ 70961:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const common = __webpack_require__(5265);
class Reader {
    constructor(_root, _settings){
        this._root = _root;
        this._settings = _settings;
        this._root = common.replacePathSegmentSeparator(_root, _settings.pathSegmentSeparator);
    }
}
exports["default"] = Reader;


/***/ }),

/***/ 77499:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const fsScandir = __webpack_require__(89819);
const common = __webpack_require__(5265);
const reader_1 = __webpack_require__(70961);
class SyncReader extends reader_1.default {
    constructor(){
        super(...arguments);
        this._scandir = fsScandir.scandirSync;
        this._storage = [];
        this._queue = new Set();
    }
    read() {
        this._pushToQueue(this._root, this._settings.basePath);
        this._handleQueue();
        return this._storage;
    }
    _pushToQueue(directory, base) {
        this._queue.add({
            directory,
            base
        });
    }
    _handleQueue() {
        for (const item of this._queue.values()){
            this._handleDirectory(item.directory, item.base);
        }
    }
    _handleDirectory(directory, base) {
        try {
            const entries = this._scandir(directory, this._settings.fsScandirSettings);
            for (const entry of entries){
                this._handleEntry(entry, base);
            }
        } catch (error) {
            this._handleError(error);
        }
    }
    _handleError(error) {
        if (!common.isFatalError(this._settings, error)) {
            return;
        }
        throw error;
    }
    _handleEntry(entry, base) {
        const fullpath = entry.path;
        if (base !== undefined) {
            entry.path = common.joinPathSegments(base, entry.name, this._settings.pathSegmentSeparator);
        }
        if (common.isAppliedFilter(this._settings.entryFilter, entry)) {
            this._pushToStorage(entry);
        }
        if (entry.dirent.isDirectory() && common.isAppliedFilter(this._settings.deepFilter, entry)) {
            this._pushToQueue(fullpath, base === undefined ? undefined : entry.path);
        }
    }
    _pushToStorage(entry) {
        this._storage.push(entry);
    }
}
exports["default"] = SyncReader;


/***/ }),

/***/ 73670:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const path = __webpack_require__(71017);
const fsScandir = __webpack_require__(89819);
class Settings {
    constructor(_options = {}){
        this._options = _options;
        this.basePath = this._getValue(this._options.basePath, undefined);
        this.concurrency = this._getValue(this._options.concurrency, Number.POSITIVE_INFINITY);
        this.deepFilter = this._getValue(this._options.deepFilter, null);
        this.entryFilter = this._getValue(this._options.entryFilter, null);
        this.errorFilter = this._getValue(this._options.errorFilter, null);
        this.pathSegmentSeparator = this._getValue(this._options.pathSegmentSeparator, path.sep);
        this.fsScandirSettings = new fsScandir.Settings({
            followSymbolicLinks: this._options.followSymbolicLinks,
            fs: this._options.fs,
            pathSegmentSeparator: this._options.pathSegmentSeparator,
            stats: this._options.stats,
            throwErrorOnBrokenSymbolicLink: this._options.throwErrorOnBrokenSymbolicLink
        });
    }
    _getValue(option, value) {
        return option !== null && option !== void 0 ? option : value;
    }
}
exports["default"] = Settings;


/***/ }),

/***/ 62234:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const stringify = __webpack_require__(13846);
const compile = __webpack_require__(95260);
const expand = __webpack_require__(16188);
const parse = __webpack_require__(14060);
/**
 * Expand the given pattern or create a regex-compatible string.
 *
 * ```js
 * const braces = require('braces');
 * console.log(braces('{a,b,c}', { compile: true })); //=> ['(a|b|c)']
 * console.log(braces('{a,b,c}')); //=> ['a', 'b', 'c']
 * ```
 * @param {String} `str`
 * @param {Object} `options`
 * @return {String}
 * @api public
 */ const braces = (input, options = {})=>{
    let output = [];
    if (Array.isArray(input)) {
        for (let pattern of input){
            let result = braces.create(pattern, options);
            if (Array.isArray(result)) {
                output.push(...result);
            } else {
                output.push(result);
            }
        }
    } else {
        output = [].concat(braces.create(input, options));
    }
    if (options && options.expand === true && options.nodupes === true) {
        output = [
            ...new Set(output)
        ];
    }
    return output;
};
/**
 * Parse the given `str` with the given `options`.
 *
 * ```js
 * // braces.parse(pattern, [, options]);
 * const ast = braces.parse('a/{b,c}/d');
 * console.log(ast);
 * ```
 * @param {String} pattern Brace pattern to parse
 * @param {Object} options
 * @return {Object} Returns an AST
 * @api public
 */ braces.parse = (input, options = {})=>parse(input, options);
/**
 * Creates a braces string from an AST, or an AST node.
 *
 * ```js
 * const braces = require('braces');
 * let ast = braces.parse('foo/{a,b}/bar');
 * console.log(stringify(ast.nodes[2])); //=> '{a,b}'
 * ```
 * @param {String} `input` Brace pattern or AST.
 * @param {Object} `options`
 * @return {Array} Returns an array of expanded values.
 * @api public
 */ braces.stringify = (input, options = {})=>{
    if (typeof input === "string") {
        return stringify(braces.parse(input, options), options);
    }
    return stringify(input, options);
};
/**
 * Compiles a brace pattern into a regex-compatible, optimized string.
 * This method is called by the main [braces](#braces) function by default.
 *
 * ```js
 * const braces = require('braces');
 * console.log(braces.compile('a/{b,c}/d'));
 * //=> ['a/(b|c)/d']
 * ```
 * @param {String} `input` Brace pattern or AST.
 * @param {Object} `options`
 * @return {Array} Returns an array of expanded values.
 * @api public
 */ braces.compile = (input, options = {})=>{
    if (typeof input === "string") {
        input = braces.parse(input, options);
    }
    return compile(input, options);
};
/**
 * Expands a brace pattern into an array. This method is called by the
 * main [braces](#braces) function when `options.expand` is true. Before
 * using this method it's recommended that you read the [performance notes](#performance))
 * and advantages of using [.compile](#compile) instead.
 *
 * ```js
 * const braces = require('braces');
 * console.log(braces.expand('a/{b,c}/d'));
 * //=> ['a/b/d', 'a/c/d'];
 * ```
 * @param {String} `pattern` Brace pattern
 * @param {Object} `options`
 * @return {Array} Returns an array of expanded values.
 * @api public
 */ braces.expand = (input, options = {})=>{
    if (typeof input === "string") {
        input = braces.parse(input, options);
    }
    let result = expand(input, options);
    // filter out empty strings if specified
    if (options.noempty === true) {
        result = result.filter(Boolean);
    }
    // filter out duplicates if specified
    if (options.nodupes === true) {
        result = [
            ...new Set(result)
        ];
    }
    return result;
};
/**
 * Processes a brace pattern and returns either an expanded array
 * (if `options.expand` is true), a highly optimized regex-compatible string.
 * This method is called by the main [braces](#braces) function.
 *
 * ```js
 * const braces = require('braces');
 * console.log(braces.create('user-{200..300}/project-{a,b,c}-{1..10}'))
 * //=> 'user-(20[0-9]|2[1-9][0-9]|300)/project-(a|b|c)-([1-9]|10)'
 * ```
 * @param {String} `pattern` Brace pattern
 * @param {Object} `options`
 * @return {Array} Returns an array of expanded values.
 * @api public
 */ braces.create = (input, options = {})=>{
    if (input === "" || input.length < 3) {
        return [
            input
        ];
    }
    return options.expand !== true ? braces.compile(input, options) : braces.expand(input, options);
};
/**
 * Expose "braces"
 */ module.exports = braces;


/***/ }),

/***/ 95260:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const fill = __webpack_require__(36707);
const utils = __webpack_require__(3537);
const compile = (ast, options = {})=>{
    let walk = (node, parent = {})=>{
        let invalidBlock = utils.isInvalidBrace(parent);
        let invalidNode = node.invalid === true && options.escapeInvalid === true;
        let invalid = invalidBlock === true || invalidNode === true;
        let prefix = options.escapeInvalid === true ? "\\" : "";
        let output = "";
        if (node.isOpen === true) {
            return prefix + node.value;
        }
        if (node.isClose === true) {
            return prefix + node.value;
        }
        if (node.type === "open") {
            return invalid ? prefix + node.value : "(";
        }
        if (node.type === "close") {
            return invalid ? prefix + node.value : ")";
        }
        if (node.type === "comma") {
            return node.prev.type === "comma" ? "" : invalid ? node.value : "|";
        }
        if (node.value) {
            return node.value;
        }
        if (node.nodes && node.ranges > 0) {
            let args = utils.reduce(node.nodes);
            let range = fill(...args, {
                ...options,
                wrap: false,
                toRegex: true
            });
            if (range.length !== 0) {
                return args.length > 1 && range.length > 1 ? `(${range})` : range;
            }
        }
        if (node.nodes) {
            for (let child of node.nodes){
                output += walk(child, node);
            }
        }
        return output;
    };
    return walk(ast);
};
module.exports = compile;


/***/ }),

/***/ 88336:
/***/ ((module) => {

"use strict";

module.exports = {
    MAX_LENGTH: 1024 * 64,
    // Digits
    CHAR_0: "0",
    /* 0 */ CHAR_9: "9",
    /* 9 */ // Alphabet chars.
    CHAR_UPPERCASE_A: "A",
    /* A */ CHAR_LOWERCASE_A: "a",
    /* a */ CHAR_UPPERCASE_Z: "Z",
    /* Z */ CHAR_LOWERCASE_Z: "z",
    /* z */ CHAR_LEFT_PARENTHESES: "(",
    /* ( */ CHAR_RIGHT_PARENTHESES: ")",
    /* ) */ CHAR_ASTERISK: "*",
    /* * */ // Non-alphabetic chars.
    CHAR_AMPERSAND: "&",
    /* & */ CHAR_AT: "@",
    /* @ */ CHAR_BACKSLASH: "\\",
    /* \ */ CHAR_BACKTICK: "`",
    /* ` */ CHAR_CARRIAGE_RETURN: "\r",
    /* \r */ CHAR_CIRCUMFLEX_ACCENT: "^",
    /* ^ */ CHAR_COLON: ":",
    /* : */ CHAR_COMMA: ",",
    /* , */ CHAR_DOLLAR: "$",
    /* . */ CHAR_DOT: ".",
    /* . */ CHAR_DOUBLE_QUOTE: '"',
    /* " */ CHAR_EQUAL: "=",
    /* = */ CHAR_EXCLAMATION_MARK: "!",
    /* ! */ CHAR_FORM_FEED: "\f",
    /* \f */ CHAR_FORWARD_SLASH: "/",
    /* / */ CHAR_HASH: "#",
    /* # */ CHAR_HYPHEN_MINUS: "-",
    /* - */ CHAR_LEFT_ANGLE_BRACKET: "<",
    /* < */ CHAR_LEFT_CURLY_BRACE: "{",
    /* { */ CHAR_LEFT_SQUARE_BRACKET: "[",
    /* [ */ CHAR_LINE_FEED: "\n",
    /* \n */ CHAR_NO_BREAK_SPACE: "\xa0",
    /* \u00A0 */ CHAR_PERCENT: "%",
    /* % */ CHAR_PLUS: "+",
    /* + */ CHAR_QUESTION_MARK: "?",
    /* ? */ CHAR_RIGHT_ANGLE_BRACKET: ">",
    /* > */ CHAR_RIGHT_CURLY_BRACE: "}",
    /* } */ CHAR_RIGHT_SQUARE_BRACKET: "]",
    /* ] */ CHAR_SEMICOLON: ";",
    /* ; */ CHAR_SINGLE_QUOTE: "'",
    /* ' */ CHAR_SPACE: " ",
    /*   */ CHAR_TAB: "	",
    /* \t */ CHAR_UNDERSCORE: "_",
    /* _ */ CHAR_VERTICAL_LINE: "|",
    /* | */ CHAR_ZERO_WIDTH_NOBREAK_SPACE: "\uFEFF" /* \uFEFF */ 
};


/***/ }),

/***/ 16188:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const fill = __webpack_require__(36707);
const stringify = __webpack_require__(13846);
const utils = __webpack_require__(3537);
const append = (queue = "", stash = "", enclose = false)=>{
    let result = [];
    queue = [].concat(queue);
    stash = [].concat(stash);
    if (!stash.length) return queue;
    if (!queue.length) {
        return enclose ? utils.flatten(stash).map((ele)=>`{${ele}}`) : stash;
    }
    for (let item of queue){
        if (Array.isArray(item)) {
            for (let value of item){
                result.push(append(value, stash, enclose));
            }
        } else {
            for (let ele of stash){
                if (enclose === true && typeof ele === "string") ele = `{${ele}}`;
                result.push(Array.isArray(ele) ? append(item, ele, enclose) : item + ele);
            }
        }
    }
    return utils.flatten(result);
};
const expand = (ast, options = {})=>{
    let rangeLimit = options.rangeLimit === void 0 ? 1000 : options.rangeLimit;
    let walk = (node, parent = {})=>{
        node.queue = [];
        let p = parent;
        let q = parent.queue;
        while(p.type !== "brace" && p.type !== "root" && p.parent){
            p = p.parent;
            q = p.queue;
        }
        if (node.invalid || node.dollar) {
            q.push(append(q.pop(), stringify(node, options)));
            return;
        }
        if (node.type === "brace" && node.invalid !== true && node.nodes.length === 2) {
            q.push(append(q.pop(), [
                "{}"
            ]));
            return;
        }
        if (node.nodes && node.ranges > 0) {
            let args = utils.reduce(node.nodes);
            if (utils.exceedsLimit(...args, options.step, rangeLimit)) {
                throw new RangeError("expanded array length exceeds range limit. Use options.rangeLimit to increase or disable the limit.");
            }
            let range = fill(...args, options);
            if (range.length === 0) {
                range = stringify(node, options);
            }
            q.push(append(q.pop(), range));
            node.nodes = [];
            return;
        }
        let enclose = utils.encloseBrace(node);
        let queue = node.queue;
        let block = node;
        while(block.type !== "brace" && block.type !== "root" && block.parent){
            block = block.parent;
            queue = block.queue;
        }
        for(let i = 0; i < node.nodes.length; i++){
            let child = node.nodes[i];
            if (child.type === "comma" && node.type === "brace") {
                if (i === 1) queue.push("");
                queue.push("");
                continue;
            }
            if (child.type === "close") {
                q.push(append(q.pop(), queue, enclose));
                continue;
            }
            if (child.value && child.type !== "open") {
                queue.push(append(queue.pop(), child.value));
                continue;
            }
            if (child.nodes) {
                walk(child, node);
            }
        }
        return queue;
    };
    return utils.flatten(walk(ast));
};
module.exports = expand;


/***/ }),

/***/ 14060:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const stringify = __webpack_require__(13846);
/**
 * Constants
 */ const { MAX_LENGTH, CHAR_BACKSLASH, /* \ */ CHAR_BACKTICK, /* ` */ CHAR_COMMA, /* , */ CHAR_DOT, /* . */ CHAR_LEFT_PARENTHESES, /* ( */ CHAR_RIGHT_PARENTHESES, /* ) */ CHAR_LEFT_CURLY_BRACE, /* { */ CHAR_RIGHT_CURLY_BRACE, /* } */ CHAR_LEFT_SQUARE_BRACKET, /* [ */ CHAR_RIGHT_SQUARE_BRACKET, /* ] */ CHAR_DOUBLE_QUOTE, /* " */ CHAR_SINGLE_QUOTE, /* ' */ CHAR_NO_BREAK_SPACE, CHAR_ZERO_WIDTH_NOBREAK_SPACE } = __webpack_require__(88336);
/**
 * parse
 */ const parse = (input, options = {})=>{
    if (typeof input !== "string") {
        throw new TypeError("Expected a string");
    }
    let opts = options || {};
    let max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
    if (input.length > max) {
        throw new SyntaxError(`Input length (${input.length}), exceeds max characters (${max})`);
    }
    let ast = {
        type: "root",
        input,
        nodes: []
    };
    let stack = [
        ast
    ];
    let block = ast;
    let prev = ast;
    let brackets = 0;
    let length = input.length;
    let index = 0;
    let depth = 0;
    let value;
    let memo = {};
    /**
   * Helpers
   */ const advance = ()=>input[index++];
    const push = (node)=>{
        if (node.type === "text" && prev.type === "dot") {
            prev.type = "text";
        }
        if (prev && prev.type === "text" && node.type === "text") {
            prev.value += node.value;
            return;
        }
        block.nodes.push(node);
        node.parent = block;
        node.prev = prev;
        prev = node;
        return node;
    };
    push({
        type: "bos"
    });
    while(index < length){
        block = stack[stack.length - 1];
        value = advance();
        /**
     * Invalid chars
     */ if (value === CHAR_ZERO_WIDTH_NOBREAK_SPACE || value === CHAR_NO_BREAK_SPACE) {
            continue;
        }
        /**
     * Escaped chars
     */ if (value === CHAR_BACKSLASH) {
            push({
                type: "text",
                value: (options.keepEscaping ? value : "") + advance()
            });
            continue;
        }
        /**
     * Right square bracket (literal): ']'
     */ if (value === CHAR_RIGHT_SQUARE_BRACKET) {
            push({
                type: "text",
                value: "\\" + value
            });
            continue;
        }
        /**
     * Left square bracket: '['
     */ if (value === CHAR_LEFT_SQUARE_BRACKET) {
            brackets++;
            let closed = true;
            let next;
            while(index < length && (next = advance())){
                value += next;
                if (next === CHAR_LEFT_SQUARE_BRACKET) {
                    brackets++;
                    continue;
                }
                if (next === CHAR_BACKSLASH) {
                    value += advance();
                    continue;
                }
                if (next === CHAR_RIGHT_SQUARE_BRACKET) {
                    brackets--;
                    if (brackets === 0) {
                        break;
                    }
                }
            }
            push({
                type: "text",
                value
            });
            continue;
        }
        /**
     * Parentheses
     */ if (value === CHAR_LEFT_PARENTHESES) {
            block = push({
                type: "paren",
                nodes: []
            });
            stack.push(block);
            push({
                type: "text",
                value
            });
            continue;
        }
        if (value === CHAR_RIGHT_PARENTHESES) {
            if (block.type !== "paren") {
                push({
                    type: "text",
                    value
                });
                continue;
            }
            block = stack.pop();
            push({
                type: "text",
                value
            });
            block = stack[stack.length - 1];
            continue;
        }
        /**
     * Quotes: '|"|`
     */ if (value === CHAR_DOUBLE_QUOTE || value === CHAR_SINGLE_QUOTE || value === CHAR_BACKTICK) {
            let open = value;
            let next;
            if (options.keepQuotes !== true) {
                value = "";
            }
            while(index < length && (next = advance())){
                if (next === CHAR_BACKSLASH) {
                    value += next + advance();
                    continue;
                }
                if (next === open) {
                    if (options.keepQuotes === true) value += next;
                    break;
                }
                value += next;
            }
            push({
                type: "text",
                value
            });
            continue;
        }
        /**
     * Left curly brace: '{'
     */ if (value === CHAR_LEFT_CURLY_BRACE) {
            depth++;
            let dollar = prev.value && prev.value.slice(-1) === "$" || block.dollar === true;
            let brace = {
                type: "brace",
                open: true,
                close: false,
                dollar,
                depth,
                commas: 0,
                ranges: 0,
                nodes: []
            };
            block = push(brace);
            stack.push(block);
            push({
                type: "open",
                value
            });
            continue;
        }
        /**
     * Right curly brace: '}'
     */ if (value === CHAR_RIGHT_CURLY_BRACE) {
            if (block.type !== "brace") {
                push({
                    type: "text",
                    value
                });
                continue;
            }
            let type = "close";
            block = stack.pop();
            block.close = true;
            push({
                type,
                value
            });
            depth--;
            block = stack[stack.length - 1];
            continue;
        }
        /**
     * Comma: ','
     */ if (value === CHAR_COMMA && depth > 0) {
            if (block.ranges > 0) {
                block.ranges = 0;
                let open = block.nodes.shift();
                block.nodes = [
                    open,
                    {
                        type: "text",
                        value: stringify(block)
                    }
                ];
            }
            push({
                type: "comma",
                value
            });
            block.commas++;
            continue;
        }
        /**
     * Dot: '.'
     */ if (value === CHAR_DOT && depth > 0 && block.commas === 0) {
            let siblings = block.nodes;
            if (depth === 0 || siblings.length === 0) {
                push({
                    type: "text",
                    value
                });
                continue;
            }
            if (prev.type === "dot") {
                block.range = [];
                prev.value += value;
                prev.type = "range";
                if (block.nodes.length !== 3 && block.nodes.length !== 5) {
                    block.invalid = true;
                    block.ranges = 0;
                    prev.type = "text";
                    continue;
                }
                block.ranges++;
                block.args = [];
                continue;
            }
            if (prev.type === "range") {
                siblings.pop();
                let before = siblings[siblings.length - 1];
                before.value += prev.value + value;
                prev = before;
                block.ranges--;
                continue;
            }
            push({
                type: "dot",
                value
            });
            continue;
        }
        /**
     * Text
     */ push({
            type: "text",
            value
        });
    }
    // Mark imbalanced braces and brackets as invalid
    do {
        block = stack.pop();
        if (block.type !== "root") {
            block.nodes.forEach((node)=>{
                if (!node.nodes) {
                    if (node.type === "open") node.isOpen = true;
                    if (node.type === "close") node.isClose = true;
                    if (!node.nodes) node.type = "text";
                    node.invalid = true;
                }
            });
            // get the location of the block on parent.nodes (block's siblings)
            let parent = stack[stack.length - 1];
            let index = parent.nodes.indexOf(block);
            // replace the (invalid) block with it's nodes
            parent.nodes.splice(index, 1, ...block.nodes);
        }
    }while (stack.length > 0);
    push({
        type: "eos"
    });
    return ast;
};
module.exports = parse;


/***/ }),

/***/ 13846:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const utils = __webpack_require__(3537);
module.exports = (ast, options = {})=>{
    let stringify = (node, parent = {})=>{
        let invalidBlock = options.escapeInvalid && utils.isInvalidBrace(parent);
        let invalidNode = node.invalid === true && options.escapeInvalid === true;
        let output = "";
        if (node.value) {
            if ((invalidBlock || invalidNode) && utils.isOpenOrClose(node)) {
                return "\\" + node.value;
            }
            return node.value;
        }
        if (node.value) {
            return node.value;
        }
        if (node.nodes) {
            for (let child of node.nodes){
                output += stringify(child);
            }
        }
        return output;
    };
    return stringify(ast);
};


/***/ }),

/***/ 3537:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

exports.isInteger = (num)=>{
    if (typeof num === "number") {
        return Number.isInteger(num);
    }
    if (typeof num === "string" && num.trim() !== "") {
        return Number.isInteger(Number(num));
    }
    return false;
};
/**
 * Find a node of the given type
 */ exports.find = (node, type)=>node.nodes.find((node)=>node.type === type);
/**
 * Find a node of the given type
 */ exports.exceedsLimit = (min, max, step = 1, limit)=>{
    if (limit === false) return false;
    if (!exports.isInteger(min) || !exports.isInteger(max)) return false;
    return (Number(max) - Number(min)) / Number(step) >= limit;
};
/**
 * Escape the given node with '\\' before node.value
 */ exports.escapeNode = (block, n = 0, type)=>{
    let node = block.nodes[n];
    if (!node) return;
    if (type && node.type === type || node.type === "open" || node.type === "close") {
        if (node.escaped !== true) {
            node.value = "\\" + node.value;
            node.escaped = true;
        }
    }
};
/**
 * Returns true if the given brace node should be enclosed in literal braces
 */ exports.encloseBrace = (node)=>{
    if (node.type !== "brace") return false;
    if (node.commas >> 0 + node.ranges >> 0 === 0) {
        node.invalid = true;
        return true;
    }
    return false;
};
/**
 * Returns true if a brace node is invalid.
 */ exports.isInvalidBrace = (block)=>{
    if (block.type !== "brace") return false;
    if (block.invalid === true || block.dollar) return true;
    if (block.commas >> 0 + block.ranges >> 0 === 0) {
        block.invalid = true;
        return true;
    }
    if (block.open !== true || block.close !== true) {
        block.invalid = true;
        return true;
    }
    return false;
};
/**
 * Returns true if a node is an open or close node
 */ exports.isOpenOrClose = (node)=>{
    if (node.type === "open" || node.type === "close") {
        return true;
    }
    return node.open === true || node.close === true;
};
/**
 * Reduce an array of text nodes.
 */ exports.reduce = (nodes)=>nodes.reduce((acc, node)=>{
        if (node.type === "text") acc.push(node.value);
        if (node.type === "range") node.type = "text";
        return acc;
    }, []);
/**
 * Flatten an array
 */ exports.flatten = (...args)=>{
    const result = [];
    const flat = (arr)=>{
        for(let i = 0; i < arr.length; i++){
            let ele = arr[i];
            Array.isArray(ele) ? flat(ele, result) : ele !== void 0 && result.push(ele);
        }
        return result;
    };
    flat(args);
    return result;
};


/***/ }),

/***/ 6988:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isGlob = __webpack_require__(96001);
var pathPosixDirname = (__webpack_require__(71017).posix.dirname);
var isWin32 = (__webpack_require__(22037).platform)() === "win32";
var slash = "/";
var backslash = /\\/g;
var enclosure = /[\{\[].*[\}\]]$/;
var globby = /(^|[^\\])([\{\[]|\([^\)]+$)/;
var escaped = /\\([\!\*\?\|\[\]\(\)\{\}])/g;
/**
 * @param {string} str
 * @param {Object} opts
 * @param {boolean} [opts.flipBackslashes=true]
 * @returns {string}
 */ module.exports = function globParent(str, opts) {
    var options = Object.assign({
        flipBackslashes: true
    }, opts);
    // flip windows path separators
    if (options.flipBackslashes && isWin32 && str.indexOf(slash) < 0) {
        str = str.replace(backslash, slash);
    }
    // special case for strings ending in enclosure containing path separator
    if (enclosure.test(str)) {
        str += slash;
    }
    // preserves full path in case of trailing path separator
    str += "a";
    // remove path parts that are globby
    do {
        str = pathPosixDirname(str);
    }while (isGlob(str) || globby.test(str));
    // remove escape chars and return result
    return str.replace(escaped, "$1");
};


/***/ }),

/***/ 77161:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const taskManager = __webpack_require__(54);
const async_1 = __webpack_require__(82927);
const stream_1 = __webpack_require__(48170);
const sync_1 = __webpack_require__(19470);
const settings_1 = __webpack_require__(26525);
const utils = __webpack_require__(72424);
async function FastGlob(source, options) {
    assertPatternsInput(source);
    const works = getWorks(source, async_1.default, options);
    const result = await Promise.all(works);
    return utils.array.flatten(result);
}
// https://github.com/typescript-eslint/typescript-eslint/issues/60
// eslint-disable-next-line no-redeclare
(function(FastGlob) {
    FastGlob.glob = FastGlob;
    FastGlob.globSync = sync;
    FastGlob.globStream = stream;
    FastGlob.async = FastGlob;
    function sync(source, options) {
        assertPatternsInput(source);
        const works = getWorks(source, sync_1.default, options);
        return utils.array.flatten(works);
    }
    FastGlob.sync = sync;
    function stream(source, options) {
        assertPatternsInput(source);
        const works = getWorks(source, stream_1.default, options);
        /**
         * The stream returned by the provider cannot work with an asynchronous iterator.
         * To support asynchronous iterators, regardless of the number of tasks, we always multiplex streams.
         * This affects performance (+25%). I don't see best solution right now.
         */ return utils.stream.merge(works);
    }
    FastGlob.stream = stream;
    function generateTasks(source, options) {
        assertPatternsInput(source);
        const patterns = [].concat(source);
        const settings = new settings_1.default(options);
        return taskManager.generate(patterns, settings);
    }
    FastGlob.generateTasks = generateTasks;
    function isDynamicPattern(source, options) {
        assertPatternsInput(source);
        const settings = new settings_1.default(options);
        return utils.pattern.isDynamicPattern(source, settings);
    }
    FastGlob.isDynamicPattern = isDynamicPattern;
    function escapePath(source) {
        assertPatternsInput(source);
        return utils.path.escape(source);
    }
    FastGlob.escapePath = escapePath;
    function convertPathToPattern(source) {
        assertPatternsInput(source);
        return utils.path.convertPathToPattern(source);
    }
    FastGlob.convertPathToPattern = convertPathToPattern;
    let posix;
    (function(posix) {
        function escapePath(source) {
            assertPatternsInput(source);
            return utils.path.escapePosixPath(source);
        }
        posix.escapePath = escapePath;
        function convertPathToPattern(source) {
            assertPatternsInput(source);
            return utils.path.convertPosixPathToPattern(source);
        }
        posix.convertPathToPattern = convertPathToPattern;
    })(posix = FastGlob.posix || (FastGlob.posix = {}));
    let win32;
    (function(win32) {
        function escapePath(source) {
            assertPatternsInput(source);
            return utils.path.escapeWindowsPath(source);
        }
        win32.escapePath = escapePath;
        function convertPathToPattern(source) {
            assertPatternsInput(source);
            return utils.path.convertWindowsPathToPattern(source);
        }
        win32.convertPathToPattern = convertPathToPattern;
    })(win32 = FastGlob.win32 || (FastGlob.win32 = {}));
})(FastGlob || (FastGlob = {}));
function getWorks(source, _Provider, options) {
    const patterns = [].concat(source);
    const settings = new settings_1.default(options);
    const tasks = taskManager.generate(patterns, settings);
    const provider = new _Provider(settings);
    return tasks.map(provider.read, provider);
}
function assertPatternsInput(input) {
    const source = [].concat(input);
    const isValidSource = source.every((item)=>utils.string.isString(item) && !utils.string.isEmpty(item));
    if (!isValidSource) {
        throw new TypeError("Patterns must be a string (non empty) or an array of strings");
    }
}
module.exports = FastGlob;


/***/ }),

/***/ 54:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.convertPatternGroupToTask = exports.convertPatternGroupsToTasks = exports.groupPatternsByBaseDirectory = exports.getNegativePatternsAsPositive = exports.getPositivePatterns = exports.convertPatternsToTasks = exports.generate = void 0;
const utils = __webpack_require__(72424);
function generate(input, settings) {
    const patterns = processPatterns(input, settings);
    const ignore = processPatterns(settings.ignore, settings);
    const positivePatterns = getPositivePatterns(patterns);
    const negativePatterns = getNegativePatternsAsPositive(patterns, ignore);
    const staticPatterns = positivePatterns.filter((pattern)=>utils.pattern.isStaticPattern(pattern, settings));
    const dynamicPatterns = positivePatterns.filter((pattern)=>utils.pattern.isDynamicPattern(pattern, settings));
    const staticTasks = convertPatternsToTasks(staticPatterns, negativePatterns, /* dynamic */ false);
    const dynamicTasks = convertPatternsToTasks(dynamicPatterns, negativePatterns, /* dynamic */ true);
    return staticTasks.concat(dynamicTasks);
}
exports.generate = generate;
function processPatterns(input, settings) {
    let patterns = input;
    /**
     * The original pattern like `{,*,**,a/*}` can lead to problems checking the depth when matching entry
     * and some problems with the micromatch package (see fast-glob issues: #365, #394).
     *
     * To solve this problem, we expand all patterns containing brace expansion. This can lead to a slight slowdown
     * in matching in the case of a large set of patterns after expansion.
     */ if (settings.braceExpansion) {
        patterns = utils.pattern.expandPatternsWithBraceExpansion(patterns);
    }
    /**
     * If the `baseNameMatch` option is enabled, we must add globstar to patterns, so that they can be used
     * at any nesting level.
     *
     * We do this here, because otherwise we have to complicate the filtering logic. For example, we need to change
     * the pattern in the filter before creating a regular expression. There is no need to change the patterns
     * in the application. Only on the input.
     */ if (settings.baseNameMatch) {
        patterns = patterns.map((pattern)=>pattern.includes("/") ? pattern : `**/${pattern}`);
    }
    /**
     * This method also removes duplicate slashes that may have been in the pattern or formed as a result of expansion.
     */ return patterns.map((pattern)=>utils.pattern.removeDuplicateSlashes(pattern));
}
/**
 * Returns tasks grouped by basic pattern directories.
 *
 * Patterns that can be found inside (`./`) and outside (`../`) the current directory are handled separately.
 * This is necessary because directory traversal starts at the base directory and goes deeper.
 */ function convertPatternsToTasks(positive, negative, dynamic) {
    const tasks = [];
    const patternsOutsideCurrentDirectory = utils.pattern.getPatternsOutsideCurrentDirectory(positive);
    const patternsInsideCurrentDirectory = utils.pattern.getPatternsInsideCurrentDirectory(positive);
    const outsideCurrentDirectoryGroup = groupPatternsByBaseDirectory(patternsOutsideCurrentDirectory);
    const insideCurrentDirectoryGroup = groupPatternsByBaseDirectory(patternsInsideCurrentDirectory);
    tasks.push(...convertPatternGroupsToTasks(outsideCurrentDirectoryGroup, negative, dynamic));
    /*
     * For the sake of reducing future accesses to the file system, we merge all tasks within the current directory
     * into a global task, if at least one pattern refers to the root (`.`). In this case, the global task covers the rest.
     */ if ("." in insideCurrentDirectoryGroup) {
        tasks.push(convertPatternGroupToTask(".", patternsInsideCurrentDirectory, negative, dynamic));
    } else {
        tasks.push(...convertPatternGroupsToTasks(insideCurrentDirectoryGroup, negative, dynamic));
    }
    return tasks;
}
exports.convertPatternsToTasks = convertPatternsToTasks;
function getPositivePatterns(patterns) {
    return utils.pattern.getPositivePatterns(patterns);
}
exports.getPositivePatterns = getPositivePatterns;
function getNegativePatternsAsPositive(patterns, ignore) {
    const negative = utils.pattern.getNegativePatterns(patterns).concat(ignore);
    const positive = negative.map(utils.pattern.convertToPositivePattern);
    return positive;
}
exports.getNegativePatternsAsPositive = getNegativePatternsAsPositive;
function groupPatternsByBaseDirectory(patterns) {
    const group = {};
    return patterns.reduce((collection, pattern)=>{
        const base = utils.pattern.getBaseDirectory(pattern);
        if (base in collection) {
            collection[base].push(pattern);
        } else {
            collection[base] = [
                pattern
            ];
        }
        return collection;
    }, group);
}
exports.groupPatternsByBaseDirectory = groupPatternsByBaseDirectory;
function convertPatternGroupsToTasks(positive, negative, dynamic) {
    return Object.keys(positive).map((base)=>{
        return convertPatternGroupToTask(base, positive[base], negative, dynamic);
    });
}
exports.convertPatternGroupsToTasks = convertPatternGroupsToTasks;
function convertPatternGroupToTask(base, positive, negative, dynamic) {
    return {
        dynamic,
        positive,
        negative,
        base,
        patterns: [].concat(positive, negative.map(utils.pattern.convertToNegativePattern))
    };
}
exports.convertPatternGroupToTask = convertPatternGroupToTask;


/***/ }),

/***/ 82927:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const async_1 = __webpack_require__(14891);
const provider_1 = __webpack_require__(79814);
class ProviderAsync extends provider_1.default {
    constructor(){
        super(...arguments);
        this._reader = new async_1.default(this._settings);
    }
    async read(task) {
        const root = this._getRootDirectory(task);
        const options = this._getReaderOptions(task);
        const entries = await this.api(root, task, options);
        return entries.map((entry)=>options.transform(entry));
    }
    api(root, task, options) {
        if (task.dynamic) {
            return this._reader.dynamic(root, options);
        }
        return this._reader.static(task.patterns, options);
    }
}
exports["default"] = ProviderAsync;


/***/ }),

/***/ 5379:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const utils = __webpack_require__(72424);
const partial_1 = __webpack_require__(88248);
class DeepFilter {
    constructor(_settings, _micromatchOptions){
        this._settings = _settings;
        this._micromatchOptions = _micromatchOptions;
    }
    getFilter(basePath, positive, negative) {
        const matcher = this._getMatcher(positive);
        const negativeRe = this._getNegativePatternsRe(negative);
        return (entry)=>this._filter(basePath, entry, matcher, negativeRe);
    }
    _getMatcher(patterns) {
        return new partial_1.default(patterns, this._settings, this._micromatchOptions);
    }
    _getNegativePatternsRe(patterns) {
        const affectDepthOfReadingPatterns = patterns.filter(utils.pattern.isAffectDepthOfReadingPattern);
        return utils.pattern.convertPatternsToRe(affectDepthOfReadingPatterns, this._micromatchOptions);
    }
    _filter(basePath, entry, matcher, negativeRe) {
        if (this._isSkippedByDeep(basePath, entry.path)) {
            return false;
        }
        if (this._isSkippedSymbolicLink(entry)) {
            return false;
        }
        const filepath = utils.path.removeLeadingDotSegment(entry.path);
        if (this._isSkippedByPositivePatterns(filepath, matcher)) {
            return false;
        }
        return this._isSkippedByNegativePatterns(filepath, negativeRe);
    }
    _isSkippedByDeep(basePath, entryPath) {
        /**
         * Avoid unnecessary depth calculations when it doesn't matter.
         */ if (this._settings.deep === Infinity) {
            return false;
        }
        return this._getEntryLevel(basePath, entryPath) >= this._settings.deep;
    }
    _getEntryLevel(basePath, entryPath) {
        const entryPathDepth = entryPath.split("/").length;
        if (basePath === "") {
            return entryPathDepth;
        }
        const basePathDepth = basePath.split("/").length;
        return entryPathDepth - basePathDepth;
    }
    _isSkippedSymbolicLink(entry) {
        return !this._settings.followSymbolicLinks && entry.dirent.isSymbolicLink();
    }
    _isSkippedByPositivePatterns(entryPath, matcher) {
        return !this._settings.baseNameMatch && !matcher.match(entryPath);
    }
    _isSkippedByNegativePatterns(entryPath, patternsRe) {
        return !utils.pattern.matchAny(entryPath, patternsRe);
    }
}
exports["default"] = DeepFilter;


/***/ }),

/***/ 59670:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const utils = __webpack_require__(72424);
class EntryFilter {
    constructor(_settings, _micromatchOptions){
        this._settings = _settings;
        this._micromatchOptions = _micromatchOptions;
        this.index = new Map();
    }
    getFilter(positive, negative) {
        const positiveRe = utils.pattern.convertPatternsToRe(positive, this._micromatchOptions);
        const negativeRe = utils.pattern.convertPatternsToRe(negative, Object.assign(Object.assign({}, this._micromatchOptions), {
            dot: true
        }));
        return (entry)=>this._filter(entry, positiveRe, negativeRe);
    }
    _filter(entry, positiveRe, negativeRe) {
        const filepath = utils.path.removeLeadingDotSegment(entry.path);
        if (this._settings.unique && this._isDuplicateEntry(filepath)) {
            return false;
        }
        if (this._onlyFileFilter(entry) || this._onlyDirectoryFilter(entry)) {
            return false;
        }
        if (this._isSkippedByAbsoluteNegativePatterns(filepath, negativeRe)) {
            return false;
        }
        const isDirectory = entry.dirent.isDirectory();
        const isMatched = this._isMatchToPatterns(filepath, positiveRe, isDirectory) && !this._isMatchToPatterns(filepath, negativeRe, isDirectory);
        if (this._settings.unique && isMatched) {
            this._createIndexRecord(filepath);
        }
        return isMatched;
    }
    _isDuplicateEntry(filepath) {
        return this.index.has(filepath);
    }
    _createIndexRecord(filepath) {
        this.index.set(filepath, undefined);
    }
    _onlyFileFilter(entry) {
        return this._settings.onlyFiles && !entry.dirent.isFile();
    }
    _onlyDirectoryFilter(entry) {
        return this._settings.onlyDirectories && !entry.dirent.isDirectory();
    }
    _isSkippedByAbsoluteNegativePatterns(entryPath, patternsRe) {
        if (!this._settings.absolute) {
            return false;
        }
        const fullpath = utils.path.makeAbsolute(this._settings.cwd, entryPath);
        return utils.pattern.matchAny(fullpath, patternsRe);
    }
    _isMatchToPatterns(filepath, patternsRe, isDirectory) {
        // Trying to match files and directories by patterns.
        const isMatched = utils.pattern.matchAny(filepath, patternsRe);
        // A pattern with a trailling slash can be used for directory matching.
        // To apply such pattern, we need to add a tralling slash to the path.
        if (!isMatched && isDirectory) {
            return utils.pattern.matchAny(filepath + "/", patternsRe);
        }
        return isMatched;
    }
}
exports["default"] = EntryFilter;


/***/ }),

/***/ 98749:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const utils = __webpack_require__(72424);
class ErrorFilter {
    constructor(_settings){
        this._settings = _settings;
    }
    getFilter() {
        return (error)=>this._isNonFatalError(error);
    }
    _isNonFatalError(error) {
        return utils.errno.isEnoentCodeError(error) || this._settings.suppressErrors;
    }
}
exports["default"] = ErrorFilter;


/***/ }),

/***/ 89535:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const utils = __webpack_require__(72424);
class Matcher {
    constructor(_patterns, _settings, _micromatchOptions){
        this._patterns = _patterns;
        this._settings = _settings;
        this._micromatchOptions = _micromatchOptions;
        this._storage = [];
        this._fillStorage();
    }
    _fillStorage() {
        for (const pattern of this._patterns){
            const segments = this._getPatternSegments(pattern);
            const sections = this._splitSegmentsIntoSections(segments);
            this._storage.push({
                complete: sections.length <= 1,
                pattern,
                segments,
                sections
            });
        }
    }
    _getPatternSegments(pattern) {
        const parts = utils.pattern.getPatternParts(pattern, this._micromatchOptions);
        return parts.map((part)=>{
            const dynamic = utils.pattern.isDynamicPattern(part, this._settings);
            if (!dynamic) {
                return {
                    dynamic: false,
                    pattern: part
                };
            }
            return {
                dynamic: true,
                pattern: part,
                patternRe: utils.pattern.makeRe(part, this._micromatchOptions)
            };
        });
    }
    _splitSegmentsIntoSections(segments) {
        return utils.array.splitWhen(segments, (segment)=>segment.dynamic && utils.pattern.hasGlobStar(segment.pattern));
    }
}
exports["default"] = Matcher;


/***/ }),

/***/ 88248:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const matcher_1 = __webpack_require__(89535);
class PartialMatcher extends matcher_1.default {
    match(filepath) {
        const parts = filepath.split("/");
        const levels = parts.length;
        const patterns = this._storage.filter((info)=>!info.complete || info.segments.length > levels);
        for (const pattern of patterns){
            const section = pattern.sections[0];
            /**
             * In this case, the pattern has a globstar and we must read all directories unconditionally,
             * but only if the level has reached the end of the first group.
             *
             * fixtures/{a,b}/**
             *  ^ true/false  ^ always true
            */ if (!pattern.complete && levels > section.length) {
                return true;
            }
            const match = parts.every((part, index)=>{
                const segment = pattern.segments[index];
                if (segment.dynamic && segment.patternRe.test(part)) {
                    return true;
                }
                if (!segment.dynamic && segment.pattern === part) {
                    return true;
                }
                return false;
            });
            if (match) {
                return true;
            }
        }
        return false;
    }
}
exports["default"] = PartialMatcher;


/***/ }),

/***/ 79814:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const path = __webpack_require__(71017);
const deep_1 = __webpack_require__(5379);
const entry_1 = __webpack_require__(59670);
const error_1 = __webpack_require__(98749);
const entry_2 = __webpack_require__(30505);
class Provider {
    constructor(_settings){
        this._settings = _settings;
        this.errorFilter = new error_1.default(this._settings);
        this.entryFilter = new entry_1.default(this._settings, this._getMicromatchOptions());
        this.deepFilter = new deep_1.default(this._settings, this._getMicromatchOptions());
        this.entryTransformer = new entry_2.default(this._settings);
    }
    _getRootDirectory(task) {
        return path.resolve(this._settings.cwd, task.base);
    }
    _getReaderOptions(task) {
        const basePath = task.base === "." ? "" : task.base;
        return {
            basePath,
            pathSegmentSeparator: "/",
            concurrency: this._settings.concurrency,
            deepFilter: this.deepFilter.getFilter(basePath, task.positive, task.negative),
            entryFilter: this.entryFilter.getFilter(task.positive, task.negative),
            errorFilter: this.errorFilter.getFilter(),
            followSymbolicLinks: this._settings.followSymbolicLinks,
            fs: this._settings.fs,
            stats: this._settings.stats,
            throwErrorOnBrokenSymbolicLink: this._settings.throwErrorOnBrokenSymbolicLink,
            transform: this.entryTransformer.getTransformer()
        };
    }
    _getMicromatchOptions() {
        return {
            dot: this._settings.dot,
            matchBase: this._settings.baseNameMatch,
            nobrace: !this._settings.braceExpansion,
            nocase: !this._settings.caseSensitiveMatch,
            noext: !this._settings.extglob,
            noglobstar: !this._settings.globstar,
            posix: true,
            strictSlashes: false
        };
    }
}
exports["default"] = Provider;


/***/ }),

/***/ 48170:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const stream_1 = __webpack_require__(12781);
const stream_2 = __webpack_require__(87741);
const provider_1 = __webpack_require__(79814);
class ProviderStream extends provider_1.default {
    constructor(){
        super(...arguments);
        this._reader = new stream_2.default(this._settings);
    }
    read(task) {
        const root = this._getRootDirectory(task);
        const options = this._getReaderOptions(task);
        const source = this.api(root, task, options);
        const destination = new stream_1.Readable({
            objectMode: true,
            read: ()=>{}
        });
        source.once("error", (error)=>destination.emit("error", error)).on("data", (entry)=>destination.emit("data", options.transform(entry))).once("end", ()=>destination.emit("end"));
        destination.once("close", ()=>source.destroy());
        return destination;
    }
    api(root, task, options) {
        if (task.dynamic) {
            return this._reader.dynamic(root, options);
        }
        return this._reader.static(task.patterns, options);
    }
}
exports["default"] = ProviderStream;


/***/ }),

/***/ 19470:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const sync_1 = __webpack_require__(56790);
const provider_1 = __webpack_require__(79814);
class ProviderSync extends provider_1.default {
    constructor(){
        super(...arguments);
        this._reader = new sync_1.default(this._settings);
    }
    read(task) {
        const root = this._getRootDirectory(task);
        const options = this._getReaderOptions(task);
        const entries = this.api(root, task, options);
        return entries.map(options.transform);
    }
    api(root, task, options) {
        if (task.dynamic) {
            return this._reader.dynamic(root, options);
        }
        return this._reader.static(task.patterns, options);
    }
}
exports["default"] = ProviderSync;


/***/ }),

/***/ 30505:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const utils = __webpack_require__(72424);
class EntryTransformer {
    constructor(_settings){
        this._settings = _settings;
    }
    getTransformer() {
        return (entry)=>this._transform(entry);
    }
    _transform(entry) {
        let filepath = entry.path;
        if (this._settings.absolute) {
            filepath = utils.path.makeAbsolute(this._settings.cwd, filepath);
            filepath = utils.path.unixify(filepath);
        }
        if (this._settings.markDirectories && entry.dirent.isDirectory()) {
            filepath += "/";
        }
        if (!this._settings.objectMode) {
            return filepath;
        }
        return Object.assign(Object.assign({}, entry), {
            path: filepath
        });
    }
}
exports["default"] = EntryTransformer;


/***/ }),

/***/ 14891:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const fsWalk = __webpack_require__(15238);
const reader_1 = __webpack_require__(16338);
const stream_1 = __webpack_require__(87741);
class ReaderAsync extends reader_1.default {
    constructor(){
        super(...arguments);
        this._walkAsync = fsWalk.walk;
        this._readerStream = new stream_1.default(this._settings);
    }
    dynamic(root, options) {
        return new Promise((resolve, reject)=>{
            this._walkAsync(root, options, (error, entries)=>{
                if (error === null) {
                    resolve(entries);
                } else {
                    reject(error);
                }
            });
        });
    }
    async static(patterns, options) {
        const entries = [];
        const stream = this._readerStream.static(patterns, options);
        // After #235, replace it with an asynchronous iterator.
        return new Promise((resolve, reject)=>{
            stream.once("error", reject);
            stream.on("data", (entry)=>entries.push(entry));
            stream.once("end", ()=>resolve(entries));
        });
    }
}
exports["default"] = ReaderAsync;


/***/ }),

/***/ 16338:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const path = __webpack_require__(71017);
const fsStat = __webpack_require__(69329);
const utils = __webpack_require__(72424);
class Reader {
    constructor(_settings){
        this._settings = _settings;
        this._fsStatSettings = new fsStat.Settings({
            followSymbolicLink: this._settings.followSymbolicLinks,
            fs: this._settings.fs,
            throwErrorOnBrokenSymbolicLink: this._settings.followSymbolicLinks
        });
    }
    _getFullEntryPath(filepath) {
        return path.resolve(this._settings.cwd, filepath);
    }
    _makeEntry(stats, pattern) {
        const entry = {
            name: pattern,
            path: pattern,
            dirent: utils.fs.createDirentFromStats(pattern, stats)
        };
        if (this._settings.stats) {
            entry.stats = stats;
        }
        return entry;
    }
    _isFatalError(error) {
        return !utils.errno.isEnoentCodeError(error) && !this._settings.suppressErrors;
    }
}
exports["default"] = Reader;


/***/ }),

/***/ 87741:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const stream_1 = __webpack_require__(12781);
const fsStat = __webpack_require__(69329);
const fsWalk = __webpack_require__(15238);
const reader_1 = __webpack_require__(16338);
class ReaderStream extends reader_1.default {
    constructor(){
        super(...arguments);
        this._walkStream = fsWalk.walkStream;
        this._stat = fsStat.stat;
    }
    dynamic(root, options) {
        return this._walkStream(root, options);
    }
    static(patterns, options) {
        const filepaths = patterns.map(this._getFullEntryPath, this);
        const stream = new stream_1.PassThrough({
            objectMode: true
        });
        stream._write = (index, _enc, done)=>{
            return this._getEntry(filepaths[index], patterns[index], options).then((entry)=>{
                if (entry !== null && options.entryFilter(entry)) {
                    stream.push(entry);
                }
                if (index === filepaths.length - 1) {
                    stream.end();
                }
                done();
            }).catch(done);
        };
        for(let i = 0; i < filepaths.length; i++){
            stream.write(i);
        }
        return stream;
    }
    _getEntry(filepath, pattern, options) {
        return this._getStat(filepath).then((stats)=>this._makeEntry(stats, pattern)).catch((error)=>{
            if (options.errorFilter(error)) {
                return null;
            }
            throw error;
        });
    }
    _getStat(filepath) {
        return new Promise((resolve, reject)=>{
            this._stat(filepath, this._fsStatSettings, (error, stats)=>{
                return error === null ? resolve(stats) : reject(error);
            });
        });
    }
}
exports["default"] = ReaderStream;


/***/ }),

/***/ 56790:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const fsStat = __webpack_require__(69329);
const fsWalk = __webpack_require__(15238);
const reader_1 = __webpack_require__(16338);
class ReaderSync extends reader_1.default {
    constructor(){
        super(...arguments);
        this._walkSync = fsWalk.walkSync;
        this._statSync = fsStat.statSync;
    }
    dynamic(root, options) {
        return this._walkSync(root, options);
    }
    static(patterns, options) {
        const entries = [];
        for (const pattern of patterns){
            const filepath = this._getFullEntryPath(pattern);
            const entry = this._getEntry(filepath, pattern, options);
            if (entry === null || !options.entryFilter(entry)) {
                continue;
            }
            entries.push(entry);
        }
        return entries;
    }
    _getEntry(filepath, pattern, options) {
        try {
            const stats = this._getStat(filepath);
            return this._makeEntry(stats, pattern);
        } catch (error) {
            if (options.errorFilter(error)) {
                return null;
            }
            throw error;
        }
    }
    _getStat(filepath) {
        return this._statSync(filepath, this._fsStatSettings);
    }
}
exports["default"] = ReaderSync;


/***/ }),

/***/ 26525:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.DEFAULT_FILE_SYSTEM_ADAPTER = void 0;
const fs = __webpack_require__(57147);
const os = __webpack_require__(22037);
/**
 * The `os.cpus` method can return zero. We expect the number of cores to be greater than zero.
 * https://github.com/nodejs/node/blob/7faeddf23a98c53896f8b574a6e66589e8fb1eb8/lib/os.js#L106-L107
 */ const CPU_COUNT = Math.max(os.cpus().length, 1);
exports.DEFAULT_FILE_SYSTEM_ADAPTER = {
    lstat: fs.lstat,
    lstatSync: fs.lstatSync,
    stat: fs.stat,
    statSync: fs.statSync,
    readdir: fs.readdir,
    readdirSync: fs.readdirSync
};
class Settings {
    constructor(_options = {}){
        this._options = _options;
        this.absolute = this._getValue(this._options.absolute, false);
        this.baseNameMatch = this._getValue(this._options.baseNameMatch, false);
        this.braceExpansion = this._getValue(this._options.braceExpansion, true);
        this.caseSensitiveMatch = this._getValue(this._options.caseSensitiveMatch, true);
        this.concurrency = this._getValue(this._options.concurrency, CPU_COUNT);
        this.cwd = this._getValue(this._options.cwd, process.cwd());
        this.deep = this._getValue(this._options.deep, Infinity);
        this.dot = this._getValue(this._options.dot, false);
        this.extglob = this._getValue(this._options.extglob, true);
        this.followSymbolicLinks = this._getValue(this._options.followSymbolicLinks, true);
        this.fs = this._getFileSystemMethods(this._options.fs);
        this.globstar = this._getValue(this._options.globstar, true);
        this.ignore = this._getValue(this._options.ignore, []);
        this.markDirectories = this._getValue(this._options.markDirectories, false);
        this.objectMode = this._getValue(this._options.objectMode, false);
        this.onlyDirectories = this._getValue(this._options.onlyDirectories, false);
        this.onlyFiles = this._getValue(this._options.onlyFiles, true);
        this.stats = this._getValue(this._options.stats, false);
        this.suppressErrors = this._getValue(this._options.suppressErrors, false);
        this.throwErrorOnBrokenSymbolicLink = this._getValue(this._options.throwErrorOnBrokenSymbolicLink, false);
        this.unique = this._getValue(this._options.unique, true);
        if (this.onlyDirectories) {
            this.onlyFiles = false;
        }
        if (this.stats) {
            this.objectMode = true;
        }
    }
    _getValue(option, value) {
        return option === undefined ? value : option;
    }
    _getFileSystemMethods(methods = {}) {
        return Object.assign(Object.assign({}, exports.DEFAULT_FILE_SYSTEM_ADAPTER), methods);
    }
}
exports["default"] = Settings;


/***/ }),

/***/ 81552:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.splitWhen = exports.flatten = void 0;
function flatten(items) {
    return items.reduce((collection, item)=>[].concat(collection, item), []);
}
exports.flatten = flatten;
function splitWhen(items, predicate) {
    const result = [
        []
    ];
    let groupIndex = 0;
    for (const item of items){
        if (predicate(item)) {
            groupIndex++;
            result[groupIndex] = [];
        } else {
            result[groupIndex].push(item);
        }
    }
    return result;
}
exports.splitWhen = splitWhen;


/***/ }),

/***/ 47100:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isEnoentCodeError = void 0;
function isEnoentCodeError(error) {
    return error.code === "ENOENT";
}
exports.isEnoentCodeError = isEnoentCodeError;


/***/ }),

/***/ 21332:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.createDirentFromStats = void 0;
class DirentFromStats {
    constructor(name, stats){
        this.name = name;
        this.isBlockDevice = stats.isBlockDevice.bind(stats);
        this.isCharacterDevice = stats.isCharacterDevice.bind(stats);
        this.isDirectory = stats.isDirectory.bind(stats);
        this.isFIFO = stats.isFIFO.bind(stats);
        this.isFile = stats.isFile.bind(stats);
        this.isSocket = stats.isSocket.bind(stats);
        this.isSymbolicLink = stats.isSymbolicLink.bind(stats);
    }
}
function createDirentFromStats(name, stats) {
    return new DirentFromStats(name, stats);
}
exports.createDirentFromStats = createDirentFromStats;


/***/ }),

/***/ 72424:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.string = exports.stream = exports.pattern = exports.path = exports.fs = exports.errno = exports.array = void 0;
const array = __webpack_require__(81552);
exports.array = array;
const errno = __webpack_require__(47100);
exports.errno = errno;
const fs = __webpack_require__(21332);
exports.fs = fs;
const path = __webpack_require__(21811);
exports.path = path;
const pattern = __webpack_require__(57678);
exports.pattern = pattern;
const stream = __webpack_require__(39371);
exports.stream = stream;
const string = __webpack_require__(37914);
exports.string = string;


/***/ }),

/***/ 21811:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.convertPosixPathToPattern = exports.convertWindowsPathToPattern = exports.convertPathToPattern = exports.escapePosixPath = exports.escapeWindowsPath = exports.escape = exports.removeLeadingDotSegment = exports.makeAbsolute = exports.unixify = void 0;
const os = __webpack_require__(22037);
const path = __webpack_require__(71017);
const IS_WINDOWS_PLATFORM = os.platform() === "win32";
const LEADING_DOT_SEGMENT_CHARACTERS_COUNT = 2; // ./ or .\\
/**
 * All non-escaped special characters.
 * Posix: ()*?[\]{|}, !+@ before (, ! at the beginning, \\ before non-special characters.
 * Windows: (){}, !+@ before (, ! at the beginning.
 */ const POSIX_UNESCAPED_GLOB_SYMBOLS_RE = /(\\?)([()*?[\]{|}]|^!|[!+@](?=\()|\\(?![!()*+?@[\]{|}]))/g;
const WINDOWS_UNESCAPED_GLOB_SYMBOLS_RE = /(\\?)([(){}]|^!|[!+@](?=\())/g;
/**
 * The device path (\\.\ or \\?\).
 * https://learn.microsoft.com/en-us/dotnet/standard/io/file-path-formats#dos-device-paths
 */ const DOS_DEVICE_PATH_RE = /^\\\\([.?])/;
/**
 * All backslashes except those escaping special characters.
 * Windows: !()+@{}
 * https://learn.microsoft.com/en-us/windows/win32/fileio/naming-a-file#naming-conventions
 */ const WINDOWS_BACKSLASHES_RE = /\\(?![!()+@{}])/g;
/**
 * Designed to work only with simple paths: `dir\\file`.
 */ function unixify(filepath) {
    return filepath.replace(/\\/g, "/");
}
exports.unixify = unixify;
function makeAbsolute(cwd, filepath) {
    return path.resolve(cwd, filepath);
}
exports.makeAbsolute = makeAbsolute;
function removeLeadingDotSegment(entry) {
    // We do not use `startsWith` because this is 10x slower than current implementation for some cases.
    // eslint-disable-next-line @typescript-eslint/prefer-string-starts-ends-with
    if (entry.charAt(0) === ".") {
        const secondCharactery = entry.charAt(1);
        if (secondCharactery === "/" || secondCharactery === "\\") {
            return entry.slice(LEADING_DOT_SEGMENT_CHARACTERS_COUNT);
        }
    }
    return entry;
}
exports.removeLeadingDotSegment = removeLeadingDotSegment;
exports.escape = IS_WINDOWS_PLATFORM ? escapeWindowsPath : escapePosixPath;
function escapeWindowsPath(pattern) {
    return pattern.replace(WINDOWS_UNESCAPED_GLOB_SYMBOLS_RE, "\\$2");
}
exports.escapeWindowsPath = escapeWindowsPath;
function escapePosixPath(pattern) {
    return pattern.replace(POSIX_UNESCAPED_GLOB_SYMBOLS_RE, "\\$2");
}
exports.escapePosixPath = escapePosixPath;
exports.convertPathToPattern = IS_WINDOWS_PLATFORM ? convertWindowsPathToPattern : convertPosixPathToPattern;
function convertWindowsPathToPattern(filepath) {
    return escapeWindowsPath(filepath).replace(DOS_DEVICE_PATH_RE, "//$1").replace(WINDOWS_BACKSLASHES_RE, "/");
}
exports.convertWindowsPathToPattern = convertWindowsPathToPattern;
function convertPosixPathToPattern(filepath) {
    return escapePosixPath(filepath);
}
exports.convertPosixPathToPattern = convertPosixPathToPattern;


/***/ }),

/***/ 57678:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.removeDuplicateSlashes = exports.matchAny = exports.convertPatternsToRe = exports.makeRe = exports.getPatternParts = exports.expandBraceExpansion = exports.expandPatternsWithBraceExpansion = exports.isAffectDepthOfReadingPattern = exports.endsWithSlashGlobStar = exports.hasGlobStar = exports.getBaseDirectory = exports.isPatternRelatedToParentDirectory = exports.getPatternsOutsideCurrentDirectory = exports.getPatternsInsideCurrentDirectory = exports.getPositivePatterns = exports.getNegativePatterns = exports.isPositivePattern = exports.isNegativePattern = exports.convertToNegativePattern = exports.convertToPositivePattern = exports.isDynamicPattern = exports.isStaticPattern = void 0;
const path = __webpack_require__(71017);
const globParent = __webpack_require__(6988);
const micromatch = __webpack_require__(15574);
const GLOBSTAR = "**";
const ESCAPE_SYMBOL = "\\";
const COMMON_GLOB_SYMBOLS_RE = /[*?]|^!/;
const REGEX_CHARACTER_CLASS_SYMBOLS_RE = /\[[^[]*]/;
const REGEX_GROUP_SYMBOLS_RE = /(?:^|[^!*+?@])\([^(]*\|[^|]*\)/;
const GLOB_EXTENSION_SYMBOLS_RE = /[!*+?@]\([^(]*\)/;
const BRACE_EXPANSION_SEPARATORS_RE = /,|\.\./;
/**
 * Matches a sequence of two or more consecutive slashes, excluding the first two slashes at the beginning of the string.
 * The latter is due to the presence of the device path at the beginning of the UNC path.
 */ const DOUBLE_SLASH_RE = /(?!^)\/{2,}/g;
function isStaticPattern(pattern, options = {}) {
    return !isDynamicPattern(pattern, options);
}
exports.isStaticPattern = isStaticPattern;
function isDynamicPattern(pattern, options = {}) {
    /**
     * A special case with an empty string is necessary for matching patterns that start with a forward slash.
     * An empty string cannot be a dynamic pattern.
     * For example, the pattern `/lib/*` will be spread into parts: '', 'lib', '*'.
     */ if (pattern === "") {
        return false;
    }
    /**
     * When the `caseSensitiveMatch` option is disabled, all patterns must be marked as dynamic, because we cannot check
     * filepath directly (without read directory).
     */ if (options.caseSensitiveMatch === false || pattern.includes(ESCAPE_SYMBOL)) {
        return true;
    }
    if (COMMON_GLOB_SYMBOLS_RE.test(pattern) || REGEX_CHARACTER_CLASS_SYMBOLS_RE.test(pattern) || REGEX_GROUP_SYMBOLS_RE.test(pattern)) {
        return true;
    }
    if (options.extglob !== false && GLOB_EXTENSION_SYMBOLS_RE.test(pattern)) {
        return true;
    }
    if (options.braceExpansion !== false && hasBraceExpansion(pattern)) {
        return true;
    }
    return false;
}
exports.isDynamicPattern = isDynamicPattern;
function hasBraceExpansion(pattern) {
    const openingBraceIndex = pattern.indexOf("{");
    if (openingBraceIndex === -1) {
        return false;
    }
    const closingBraceIndex = pattern.indexOf("}", openingBraceIndex + 1);
    if (closingBraceIndex === -1) {
        return false;
    }
    const braceContent = pattern.slice(openingBraceIndex, closingBraceIndex);
    return BRACE_EXPANSION_SEPARATORS_RE.test(braceContent);
}
function convertToPositivePattern(pattern) {
    return isNegativePattern(pattern) ? pattern.slice(1) : pattern;
}
exports.convertToPositivePattern = convertToPositivePattern;
function convertToNegativePattern(pattern) {
    return "!" + pattern;
}
exports.convertToNegativePattern = convertToNegativePattern;
function isNegativePattern(pattern) {
    return pattern.startsWith("!") && pattern[1] !== "(";
}
exports.isNegativePattern = isNegativePattern;
function isPositivePattern(pattern) {
    return !isNegativePattern(pattern);
}
exports.isPositivePattern = isPositivePattern;
function getNegativePatterns(patterns) {
    return patterns.filter(isNegativePattern);
}
exports.getNegativePatterns = getNegativePatterns;
function getPositivePatterns(patterns) {
    return patterns.filter(isPositivePattern);
}
exports.getPositivePatterns = getPositivePatterns;
/**
 * Returns patterns that can be applied inside the current directory.
 *
 * @example
 * // ['./*', '*', 'a/*']
 * getPatternsInsideCurrentDirectory(['./*', '*', 'a/*', '../*', './../*'])
 */ function getPatternsInsideCurrentDirectory(patterns) {
    return patterns.filter((pattern)=>!isPatternRelatedToParentDirectory(pattern));
}
exports.getPatternsInsideCurrentDirectory = getPatternsInsideCurrentDirectory;
/**
 * Returns patterns to be expanded relative to (outside) the current directory.
 *
 * @example
 * // ['../*', './../*']
 * getPatternsInsideCurrentDirectory(['./*', '*', 'a/*', '../*', './../*'])
 */ function getPatternsOutsideCurrentDirectory(patterns) {
    return patterns.filter(isPatternRelatedToParentDirectory);
}
exports.getPatternsOutsideCurrentDirectory = getPatternsOutsideCurrentDirectory;
function isPatternRelatedToParentDirectory(pattern) {
    return pattern.startsWith("..") || pattern.startsWith("./..");
}
exports.isPatternRelatedToParentDirectory = isPatternRelatedToParentDirectory;
function getBaseDirectory(pattern) {
    return globParent(pattern, {
        flipBackslashes: false
    });
}
exports.getBaseDirectory = getBaseDirectory;
function hasGlobStar(pattern) {
    return pattern.includes(GLOBSTAR);
}
exports.hasGlobStar = hasGlobStar;
function endsWithSlashGlobStar(pattern) {
    return pattern.endsWith("/" + GLOBSTAR);
}
exports.endsWithSlashGlobStar = endsWithSlashGlobStar;
function isAffectDepthOfReadingPattern(pattern) {
    const basename = path.basename(pattern);
    return endsWithSlashGlobStar(pattern) || isStaticPattern(basename);
}
exports.isAffectDepthOfReadingPattern = isAffectDepthOfReadingPattern;
function expandPatternsWithBraceExpansion(patterns) {
    return patterns.reduce((collection, pattern)=>{
        return collection.concat(expandBraceExpansion(pattern));
    }, []);
}
exports.expandPatternsWithBraceExpansion = expandPatternsWithBraceExpansion;
function expandBraceExpansion(pattern) {
    const patterns = micromatch.braces(pattern, {
        expand: true,
        nodupes: true
    });
    /**
     * Sort the patterns by length so that the same depth patterns are processed side by side.
     * `a/{b,}/{c,}/*` – `['a///*', 'a/b//*', 'a//c/*', 'a/b/c/*']`
     */ patterns.sort((a, b)=>a.length - b.length);
    /**
     * Micromatch can return an empty string in the case of patterns like `{a,}`.
     */ return patterns.filter((pattern)=>pattern !== "");
}
exports.expandBraceExpansion = expandBraceExpansion;
function getPatternParts(pattern, options) {
    let { parts } = micromatch.scan(pattern, Object.assign(Object.assign({}, options), {
        parts: true
    }));
    /**
     * The scan method returns an empty array in some cases.
     * See micromatch/picomatch#58 for more details.
     */ if (parts.length === 0) {
        parts = [
            pattern
        ];
    }
    /**
     * The scan method does not return an empty part for the pattern with a forward slash.
     * This is another part of micromatch/picomatch#58.
     */ if (parts[0].startsWith("/")) {
        parts[0] = parts[0].slice(1);
        parts.unshift("");
    }
    return parts;
}
exports.getPatternParts = getPatternParts;
function makeRe(pattern, options) {
    return micromatch.makeRe(pattern, options);
}
exports.makeRe = makeRe;
function convertPatternsToRe(patterns, options) {
    return patterns.map((pattern)=>makeRe(pattern, options));
}
exports.convertPatternsToRe = convertPatternsToRe;
function matchAny(entry, patternsRe) {
    return patternsRe.some((patternRe)=>patternRe.test(entry));
}
exports.matchAny = matchAny;
/**
 * This package only works with forward slashes as a path separator.
 * Because of this, we cannot use the standard `path.normalize` method, because on Windows platform it will use of backslashes.
 */ function removeDuplicateSlashes(pattern) {
    return pattern.replace(DOUBLE_SLASH_RE, "/");
}
exports.removeDuplicateSlashes = removeDuplicateSlashes;


/***/ }),

/***/ 39371:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.merge = void 0;
const merge2 = __webpack_require__(84121);
function merge(streams) {
    const mergedStream = merge2(streams);
    streams.forEach((stream)=>{
        stream.once("error", (error)=>mergedStream.emit("error", error));
    });
    mergedStream.once("close", ()=>propagateCloseEventToSources(streams));
    mergedStream.once("end", ()=>propagateCloseEventToSources(streams));
    return mergedStream;
}
exports.merge = merge;
function propagateCloseEventToSources(streams) {
    streams.forEach((stream)=>stream.emit("close"));
}


/***/ }),

/***/ 37914:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isEmpty = exports.isString = void 0;
function isString(input) {
    return typeof input === "string";
}
exports.isString = isString;
function isEmpty(input) {
    return input === "";
}
exports.isEmpty = isEmpty;


/***/ }),

/***/ 97719:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/* eslint-disable no-var */ var reusify = __webpack_require__(30522);
function fastqueue(context, worker, concurrency) {
    if (typeof context === "function") {
        concurrency = worker;
        worker = context;
        context = null;
    }
    if (concurrency < 1) {
        throw new Error("fastqueue concurrency must be greater than 1");
    }
    var cache = reusify(Task);
    var queueHead = null;
    var queueTail = null;
    var _running = 0;
    var errorHandler = null;
    var self = {
        push: push,
        drain: noop,
        saturated: noop,
        pause: pause,
        paused: false,
        concurrency: concurrency,
        running: running,
        resume: resume,
        idle: idle,
        length: length,
        getQueue: getQueue,
        unshift: unshift,
        empty: noop,
        kill: kill,
        killAndDrain: killAndDrain,
        error: error
    };
    return self;
    function running() {
        return _running;
    }
    function pause() {
        self.paused = true;
    }
    function length() {
        var current = queueHead;
        var counter = 0;
        while(current){
            current = current.next;
            counter++;
        }
        return counter;
    }
    function getQueue() {
        var current = queueHead;
        var tasks = [];
        while(current){
            tasks.push(current.value);
            current = current.next;
        }
        return tasks;
    }
    function resume() {
        if (!self.paused) return;
        self.paused = false;
        for(var i = 0; i < self.concurrency; i++){
            _running++;
            release();
        }
    }
    function idle() {
        return _running === 0 && self.length() === 0;
    }
    function push(value, done) {
        var current = cache.get();
        current.context = context;
        current.release = release;
        current.value = value;
        current.callback = done || noop;
        current.errorHandler = errorHandler;
        if (_running === self.concurrency || self.paused) {
            if (queueTail) {
                queueTail.next = current;
                queueTail = current;
            } else {
                queueHead = current;
                queueTail = current;
                self.saturated();
            }
        } else {
            _running++;
            worker.call(context, current.value, current.worked);
        }
    }
    function unshift(value, done) {
        var current = cache.get();
        current.context = context;
        current.release = release;
        current.value = value;
        current.callback = done || noop;
        if (_running === self.concurrency || self.paused) {
            if (queueHead) {
                current.next = queueHead;
                queueHead = current;
            } else {
                queueHead = current;
                queueTail = current;
                self.saturated();
            }
        } else {
            _running++;
            worker.call(context, current.value, current.worked);
        }
    }
    function release(holder) {
        if (holder) {
            cache.release(holder);
        }
        var next = queueHead;
        if (next) {
            if (!self.paused) {
                if (queueTail === queueHead) {
                    queueTail = null;
                }
                queueHead = next.next;
                next.next = null;
                worker.call(context, next.value, next.worked);
                if (queueTail === null) {
                    self.empty();
                }
            } else {
                _running--;
            }
        } else if (--_running === 0) {
            self.drain();
        }
    }
    function kill() {
        queueHead = null;
        queueTail = null;
        self.drain = noop;
    }
    function killAndDrain() {
        queueHead = null;
        queueTail = null;
        self.drain();
        self.drain = noop;
    }
    function error(handler) {
        errorHandler = handler;
    }
}
function noop() {}
function Task() {
    this.value = null;
    this.callback = noop;
    this.next = null;
    this.release = noop;
    this.context = null;
    this.errorHandler = null;
    var self = this;
    this.worked = function worked(err, result) {
        var callback = self.callback;
        var errorHandler = self.errorHandler;
        var val = self.value;
        self.value = null;
        self.callback = noop;
        if (self.errorHandler) {
            errorHandler(err, val);
        }
        callback.call(self.context, err, result);
        self.release(self);
    };
}
function queueAsPromised(context, worker, concurrency) {
    if (typeof context === "function") {
        concurrency = worker;
        worker = context;
        context = null;
    }
    function asyncWrapper(arg, cb) {
        worker.call(this, arg).then(function(res) {
            cb(null, res);
        }, cb);
    }
    var queue = fastqueue(context, asyncWrapper, concurrency);
    var pushCb = queue.push;
    var unshiftCb = queue.unshift;
    queue.push = push;
    queue.unshift = unshift;
    queue.drained = drained;
    return queue;
    function push(value) {
        var p = new Promise(function(resolve, reject) {
            pushCb(value, function(err, result) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(result);
            });
        });
        // Let's fork the promise chain to
        // make the error bubble up to the user but
        // not lead to a unhandledRejection
        p.catch(noop);
        return p;
    }
    function unshift(value) {
        var p = new Promise(function(resolve, reject) {
            unshiftCb(value, function(err, result) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(result);
            });
        });
        // Let's fork the promise chain to
        // make the error bubble up to the user but
        // not lead to a unhandledRejection
        p.catch(noop);
        return p;
    }
    function drained() {
        if (queue.idle()) {
            return new Promise(function(resolve) {
                resolve();
            });
        }
        var previousDrain = queue.drain;
        var p = new Promise(function(resolve) {
            queue.drain = function() {
                previousDrain();
                resolve();
            };
        });
        return p;
    }
}
module.exports = fastqueue;
module.exports.promise = queueAsPromised;


/***/ }),

/***/ 36707:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*!
 * fill-range <https://github.com/jonschlinkert/fill-range>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Licensed under the MIT License.
 */ 
const util = __webpack_require__(73837);
const toRegexRange = __webpack_require__(73382);
const isObject = (val)=>val !== null && typeof val === "object" && !Array.isArray(val);
const transform = (toNumber)=>{
    return (value)=>toNumber === true ? Number(value) : String(value);
};
const isValidValue = (value)=>{
    return typeof value === "number" || typeof value === "string" && value !== "";
};
const isNumber = (num)=>Number.isInteger(+num);
const zeros = (input)=>{
    let value = `${input}`;
    let index = -1;
    if (value[0] === "-") value = value.slice(1);
    if (value === "0") return false;
    while(value[++index] === "0");
    return index > 0;
};
const stringify = (start, end, options)=>{
    if (typeof start === "string" || typeof end === "string") {
        return true;
    }
    return options.stringify === true;
};
const pad = (input, maxLength, toNumber)=>{
    if (maxLength > 0) {
        let dash = input[0] === "-" ? "-" : "";
        if (dash) input = input.slice(1);
        input = dash + input.padStart(dash ? maxLength - 1 : maxLength, "0");
    }
    if (toNumber === false) {
        return String(input);
    }
    return input;
};
const toMaxLen = (input, maxLength)=>{
    let negative = input[0] === "-" ? "-" : "";
    if (negative) {
        input = input.slice(1);
        maxLength--;
    }
    while(input.length < maxLength)input = "0" + input;
    return negative ? "-" + input : input;
};
const toSequence = (parts, options)=>{
    parts.negatives.sort((a, b)=>a < b ? -1 : a > b ? 1 : 0);
    parts.positives.sort((a, b)=>a < b ? -1 : a > b ? 1 : 0);
    let prefix = options.capture ? "" : "?:";
    let positives = "";
    let negatives = "";
    let result;
    if (parts.positives.length) {
        positives = parts.positives.join("|");
    }
    if (parts.negatives.length) {
        negatives = `-(${prefix}${parts.negatives.join("|")})`;
    }
    if (positives && negatives) {
        result = `${positives}|${negatives}`;
    } else {
        result = positives || negatives;
    }
    if (options.wrap) {
        return `(${prefix}${result})`;
    }
    return result;
};
const toRange = (a, b, isNumbers, options)=>{
    if (isNumbers) {
        return toRegexRange(a, b, {
            wrap: false,
            ...options
        });
    }
    let start = String.fromCharCode(a);
    if (a === b) return start;
    let stop = String.fromCharCode(b);
    return `[${start}-${stop}]`;
};
const toRegex = (start, end, options)=>{
    if (Array.isArray(start)) {
        let wrap = options.wrap === true;
        let prefix = options.capture ? "" : "?:";
        return wrap ? `(${prefix}${start.join("|")})` : start.join("|");
    }
    return toRegexRange(start, end, options);
};
const rangeError = (...args)=>{
    return new RangeError("Invalid range arguments: " + util.inspect(...args));
};
const invalidRange = (start, end, options)=>{
    if (options.strictRanges === true) throw rangeError([
        start,
        end
    ]);
    return [];
};
const invalidStep = (step, options)=>{
    if (options.strictRanges === true) {
        throw new TypeError(`Expected step "${step}" to be a number`);
    }
    return [];
};
const fillNumbers = (start, end, step = 1, options = {})=>{
    let a = Number(start);
    let b = Number(end);
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        if (options.strictRanges === true) throw rangeError([
            start,
            end
        ]);
        return [];
    }
    // fix negative zero
    if (a === 0) a = 0;
    if (b === 0) b = 0;
    let descending = a > b;
    let startString = String(start);
    let endString = String(end);
    let stepString = String(step);
    step = Math.max(Math.abs(step), 1);
    let padded = zeros(startString) || zeros(endString) || zeros(stepString);
    let maxLen = padded ? Math.max(startString.length, endString.length, stepString.length) : 0;
    let toNumber = padded === false && stringify(start, end, options) === false;
    let format = options.transform || transform(toNumber);
    if (options.toRegex && step === 1) {
        return toRange(toMaxLen(start, maxLen), toMaxLen(end, maxLen), true, options);
    }
    let parts = {
        negatives: [],
        positives: []
    };
    let push = (num)=>parts[num < 0 ? "negatives" : "positives"].push(Math.abs(num));
    let range = [];
    let index = 0;
    while(descending ? a >= b : a <= b){
        if (options.toRegex === true && step > 1) {
            push(a);
        } else {
            range.push(pad(format(a, index), maxLen, toNumber));
        }
        a = descending ? a - step : a + step;
        index++;
    }
    if (options.toRegex === true) {
        return step > 1 ? toSequence(parts, options) : toRegex(range, null, {
            wrap: false,
            ...options
        });
    }
    return range;
};
const fillLetters = (start, end, step = 1, options = {})=>{
    if (!isNumber(start) && start.length > 1 || !isNumber(end) && end.length > 1) {
        return invalidRange(start, end, options);
    }
    let format = options.transform || ((val)=>String.fromCharCode(val));
    let a = `${start}`.charCodeAt(0);
    let b = `${end}`.charCodeAt(0);
    let descending = a > b;
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    if (options.toRegex && step === 1) {
        return toRange(min, max, false, options);
    }
    let range = [];
    let index = 0;
    while(descending ? a >= b : a <= b){
        range.push(format(a, index));
        a = descending ? a - step : a + step;
        index++;
    }
    if (options.toRegex === true) {
        return toRegex(range, null, {
            wrap: false,
            options
        });
    }
    return range;
};
const fill = (start, end, step, options = {})=>{
    if (end == null && isValidValue(start)) {
        return [
            start
        ];
    }
    if (!isValidValue(start) || !isValidValue(end)) {
        return invalidRange(start, end, options);
    }
    if (typeof step === "function") {
        return fill(start, end, 1, {
            transform: step
        });
    }
    if (isObject(step)) {
        return fill(start, end, 0, step);
    }
    let opts = {
        ...options
    };
    if (opts.capture === true) opts.wrap = true;
    step = step || opts.step || 1;
    if (!isNumber(step)) {
        if (step != null && !isObject(step)) return invalidStep(step, opts);
        return fill(start, end, 1, step);
    }
    if (isNumber(start) && isNumber(end)) {
        return fillNumbers(start, end, step, opts);
    }
    return fillLetters(start, end, Math.max(Math.abs(step), 1), opts);
};
module.exports = fill;


/***/ }),

/***/ 28241:
/***/ ((module) => {

"use strict";
/*!
 * is-extglob <https://github.com/jonschlinkert/is-extglob>
 *
 * Copyright (c) 2014-2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */ 
module.exports = function isExtglob(str) {
    if (typeof str !== "string" || str === "") {
        return false;
    }
    var match;
    while(match = /(\\).|([@?!+*]\(.*\))/g.exec(str)){
        if (match[2]) return true;
        str = str.slice(match.index + match[0].length);
    }
    return false;
};


/***/ }),

/***/ 96001:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*!
 * is-glob <https://github.com/jonschlinkert/is-glob>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */ 
var isExtglob = __webpack_require__(28241);
var chars = {
    "{": "}",
    "(": ")",
    "[": "]"
};
var strictCheck = function(str) {
    if (str[0] === "!") {
        return true;
    }
    var index = 0;
    var pipeIndex = -2;
    var closeSquareIndex = -2;
    var closeCurlyIndex = -2;
    var closeParenIndex = -2;
    var backSlashIndex = -2;
    while(index < str.length){
        if (str[index] === "*") {
            return true;
        }
        if (str[index + 1] === "?" && /[\].+)]/.test(str[index])) {
            return true;
        }
        if (closeSquareIndex !== -1 && str[index] === "[" && str[index + 1] !== "]") {
            if (closeSquareIndex < index) {
                closeSquareIndex = str.indexOf("]", index);
            }
            if (closeSquareIndex > index) {
                if (backSlashIndex === -1 || backSlashIndex > closeSquareIndex) {
                    return true;
                }
                backSlashIndex = str.indexOf("\\", index);
                if (backSlashIndex === -1 || backSlashIndex > closeSquareIndex) {
                    return true;
                }
            }
        }
        if (closeCurlyIndex !== -1 && str[index] === "{" && str[index + 1] !== "}") {
            closeCurlyIndex = str.indexOf("}", index);
            if (closeCurlyIndex > index) {
                backSlashIndex = str.indexOf("\\", index);
                if (backSlashIndex === -1 || backSlashIndex > closeCurlyIndex) {
                    return true;
                }
            }
        }
        if (closeParenIndex !== -1 && str[index] === "(" && str[index + 1] === "?" && /[:!=]/.test(str[index + 2]) && str[index + 3] !== ")") {
            closeParenIndex = str.indexOf(")", index);
            if (closeParenIndex > index) {
                backSlashIndex = str.indexOf("\\", index);
                if (backSlashIndex === -1 || backSlashIndex > closeParenIndex) {
                    return true;
                }
            }
        }
        if (pipeIndex !== -1 && str[index] === "(" && str[index + 1] !== "|") {
            if (pipeIndex < index) {
                pipeIndex = str.indexOf("|", index);
            }
            if (pipeIndex !== -1 && str[pipeIndex + 1] !== ")") {
                closeParenIndex = str.indexOf(")", pipeIndex);
                if (closeParenIndex > pipeIndex) {
                    backSlashIndex = str.indexOf("\\", pipeIndex);
                    if (backSlashIndex === -1 || backSlashIndex > closeParenIndex) {
                        return true;
                    }
                }
            }
        }
        if (str[index] === "\\") {
            var open = str[index + 1];
            index += 2;
            var close = chars[open];
            if (close) {
                var n = str.indexOf(close, index);
                if (n !== -1) {
                    index = n + 1;
                }
            }
            if (str[index] === "!") {
                return true;
            }
        } else {
            index++;
        }
    }
    return false;
};
var relaxedCheck = function(str) {
    if (str[0] === "!") {
        return true;
    }
    var index = 0;
    while(index < str.length){
        if (/[*?{}()[\]]/.test(str[index])) {
            return true;
        }
        if (str[index] === "\\") {
            var open = str[index + 1];
            index += 2;
            var close = chars[open];
            if (close) {
                var n = str.indexOf(close, index);
                if (n !== -1) {
                    index = n + 1;
                }
            }
            if (str[index] === "!") {
                return true;
            }
        } else {
            index++;
        }
    }
    return false;
};
module.exports = function isGlob(str, options) {
    if (typeof str !== "string" || str === "") {
        return false;
    }
    if (isExtglob(str)) {
        return true;
    }
    var check = strictCheck;
    // optionally relax check
    if (options && options.strict === false) {
        check = relaxedCheck;
    }
    return check(str);
};


/***/ }),

/***/ 83921:
/***/ ((module) => {

"use strict";
/*!
 * is-number <https://github.com/jonschlinkert/is-number>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */ 
module.exports = function(num) {
    if (typeof num === "number") {
        return num - num === 0;
    }
    if (typeof num === "string" && num.trim() !== "") {
        return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
    }
    return false;
};


/***/ }),

/***/ 84121:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/*
 * merge2
 * https://github.com/teambition/merge2
 *
 * Copyright (c) 2014-2020 Teambition
 * Licensed under the MIT license.
 */ const Stream = __webpack_require__(12781);
const PassThrough = Stream.PassThrough;
const slice = Array.prototype.slice;
module.exports = merge2;
function merge2() {
    const streamsQueue = [];
    const args = slice.call(arguments);
    let merging = false;
    let options = args[args.length - 1];
    if (options && !Array.isArray(options) && options.pipe == null) {
        args.pop();
    } else {
        options = {};
    }
    const doEnd = options.end !== false;
    const doPipeError = options.pipeError === true;
    if (options.objectMode == null) {
        options.objectMode = true;
    }
    if (options.highWaterMark == null) {
        options.highWaterMark = 64 * 1024;
    }
    const mergedStream = PassThrough(options);
    function addStream() {
        for(let i = 0, len = arguments.length; i < len; i++){
            streamsQueue.push(pauseStreams(arguments[i], options));
        }
        mergeStream();
        return this;
    }
    function mergeStream() {
        if (merging) {
            return;
        }
        merging = true;
        let streams = streamsQueue.shift();
        if (!streams) {
            process.nextTick(endStream);
            return;
        }
        if (!Array.isArray(streams)) {
            streams = [
                streams
            ];
        }
        let pipesCount = streams.length + 1;
        function next() {
            if (--pipesCount > 0) {
                return;
            }
            merging = false;
            mergeStream();
        }
        function pipe(stream) {
            function onend() {
                stream.removeListener("merge2UnpipeEnd", onend);
                stream.removeListener("end", onend);
                if (doPipeError) {
                    stream.removeListener("error", onerror);
                }
                next();
            }
            function onerror(err) {
                mergedStream.emit("error", err);
            }
            // skip ended stream
            if (stream._readableState.endEmitted) {
                return next();
            }
            stream.on("merge2UnpipeEnd", onend);
            stream.on("end", onend);
            if (doPipeError) {
                stream.on("error", onerror);
            }
            stream.pipe(mergedStream, {
                end: false
            });
            // compatible for old stream
            stream.resume();
        }
        for(let i = 0; i < streams.length; i++){
            pipe(streams[i]);
        }
        next();
    }
    function endStream() {
        merging = false;
        // emit 'queueDrain' when all streams merged.
        mergedStream.emit("queueDrain");
        if (doEnd) {
            mergedStream.end();
        }
    }
    mergedStream.setMaxListeners(0);
    mergedStream.add = addStream;
    mergedStream.on("unpipe", function(stream) {
        stream.emit("merge2UnpipeEnd");
    });
    if (args.length) {
        addStream.apply(null, args);
    }
    return mergedStream;
}
// check and pause streams for pipe.
function pauseStreams(streams, options) {
    if (!Array.isArray(streams)) {
        // Backwards-compat with old-style streams
        if (!streams._readableState && streams.pipe) {
            streams = streams.pipe(PassThrough(options));
        }
        if (!streams._readableState || !streams.pause || !streams.pipe) {
            throw new Error("Only readable stream can be merged.");
        }
        streams.pause();
    } else {
        for(let i = 0, len = streams.length; i < len; i++){
            streams[i] = pauseStreams(streams[i], options);
        }
    }
    return streams;
}


/***/ }),

/***/ 15574:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const util = __webpack_require__(73837);
const braces = __webpack_require__(62234);
const picomatch = __webpack_require__(265);
const utils = __webpack_require__(68157);
const isEmptyString = (val)=>val === "" || val === "./";
/**
 * Returns an array of strings that match one or more glob patterns.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm(list, patterns[, options]);
 *
 * console.log(mm(['a.js', 'a.txt'], ['*.js']));
 * //=> [ 'a.js' ]
 * ```
 * @param {String|Array<string>} `list` List of strings to match.
 * @param {String|Array<string>} `patterns` One or more glob patterns to use for matching.
 * @param {Object} `options` See available [options](#options)
 * @return {Array} Returns an array of matches
 * @summary false
 * @api public
 */ const micromatch = (list, patterns, options)=>{
    patterns = [].concat(patterns);
    list = [].concat(list);
    let omit = new Set();
    let keep = new Set();
    let items = new Set();
    let negatives = 0;
    let onResult = (state)=>{
        items.add(state.output);
        if (options && options.onResult) {
            options.onResult(state);
        }
    };
    for(let i = 0; i < patterns.length; i++){
        let isMatch = picomatch(String(patterns[i]), {
            ...options,
            onResult
        }, true);
        let negated = isMatch.state.negated || isMatch.state.negatedExtglob;
        if (negated) negatives++;
        for (let item of list){
            let matched = isMatch(item, true);
            let match = negated ? !matched.isMatch : matched.isMatch;
            if (!match) continue;
            if (negated) {
                omit.add(matched.output);
            } else {
                omit.delete(matched.output);
                keep.add(matched.output);
            }
        }
    }
    let result = negatives === patterns.length ? [
        ...items
    ] : [
        ...keep
    ];
    let matches = result.filter((item)=>!omit.has(item));
    if (options && matches.length === 0) {
        if (options.failglob === true) {
            throw new Error(`No matches found for "${patterns.join(", ")}"`);
        }
        if (options.nonull === true || options.nullglob === true) {
            return options.unescape ? patterns.map((p)=>p.replace(/\\/g, "")) : patterns;
        }
    }
    return matches;
};
/**
 * Backwards compatibility
 */ micromatch.match = micromatch;
/**
 * Returns a matcher function from the given glob `pattern` and `options`.
 * The returned function takes a string to match as its only argument and returns
 * true if the string is a match.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.matcher(pattern[, options]);
 *
 * const isMatch = mm.matcher('*.!(*a)');
 * console.log(isMatch('a.a')); //=> false
 * console.log(isMatch('a.b')); //=> true
 * ```
 * @param {String} `pattern` Glob pattern
 * @param {Object} `options`
 * @return {Function} Returns a matcher function.
 * @api public
 */ micromatch.matcher = (pattern, options)=>picomatch(pattern, options);
/**
 * Returns true if **any** of the given glob `patterns` match the specified `string`.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.isMatch(string, patterns[, options]);
 *
 * console.log(mm.isMatch('a.a', ['b.*', '*.a'])); //=> true
 * console.log(mm.isMatch('a.a', 'b.*')); //=> false
 * ```
 * @param {String} `str` The string to test.
 * @param {String|Array} `patterns` One or more glob patterns to use for matching.
 * @param {Object} `[options]` See available [options](#options).
 * @return {Boolean} Returns true if any patterns match `str`
 * @api public
 */ micromatch.isMatch = (str, patterns, options)=>picomatch(patterns, options)(str);
/**
 * Backwards compatibility
 */ micromatch.any = micromatch.isMatch;
/**
 * Returns a list of strings that _**do not match any**_ of the given `patterns`.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.not(list, patterns[, options]);
 *
 * console.log(mm.not(['a.a', 'b.b', 'c.c'], '*.a'));
 * //=> ['b.b', 'c.c']
 * ```
 * @param {Array} `list` Array of strings to match.
 * @param {String|Array} `patterns` One or more glob pattern to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Array} Returns an array of strings that **do not match** the given patterns.
 * @api public
 */ micromatch.not = (list, patterns, options = {})=>{
    patterns = [].concat(patterns).map(String);
    let result = new Set();
    let items = [];
    let onResult = (state)=>{
        if (options.onResult) options.onResult(state);
        items.push(state.output);
    };
    let matches = new Set(micromatch(list, patterns, {
        ...options,
        onResult
    }));
    for (let item of items){
        if (!matches.has(item)) {
            result.add(item);
        }
    }
    return [
        ...result
    ];
};
/**
 * Returns true if the given `string` contains the given pattern. Similar
 * to [.isMatch](#isMatch) but the pattern can match any part of the string.
 *
 * ```js
 * var mm = require('micromatch');
 * // mm.contains(string, pattern[, options]);
 *
 * console.log(mm.contains('aa/bb/cc', '*b'));
 * //=> true
 * console.log(mm.contains('aa/bb/cc', '*d'));
 * //=> false
 * ```
 * @param {String} `str` The string to match.
 * @param {String|Array} `patterns` Glob pattern to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Boolean} Returns true if any of the patterns matches any part of `str`.
 * @api public
 */ micromatch.contains = (str, pattern, options)=>{
    if (typeof str !== "string") {
        throw new TypeError(`Expected a string: "${util.inspect(str)}"`);
    }
    if (Array.isArray(pattern)) {
        return pattern.some((p)=>micromatch.contains(str, p, options));
    }
    if (typeof pattern === "string") {
        if (isEmptyString(str) || isEmptyString(pattern)) {
            return false;
        }
        if (str.includes(pattern) || str.startsWith("./") && str.slice(2).includes(pattern)) {
            return true;
        }
    }
    return micromatch.isMatch(str, pattern, {
        ...options,
        contains: true
    });
};
/**
 * Filter the keys of the given object with the given `glob` pattern
 * and `options`. Does not attempt to match nested keys. If you need this feature,
 * use [glob-object][] instead.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.matchKeys(object, patterns[, options]);
 *
 * const obj = { aa: 'a', ab: 'b', ac: 'c' };
 * console.log(mm.matchKeys(obj, '*b'));
 * //=> { ab: 'b' }
 * ```
 * @param {Object} `object` The object with keys to filter.
 * @param {String|Array} `patterns` One or more glob patterns to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Object} Returns an object with only keys that match the given patterns.
 * @api public
 */ micromatch.matchKeys = (obj, patterns, options)=>{
    if (!utils.isObject(obj)) {
        throw new TypeError("Expected the first argument to be an object");
    }
    let keys = micromatch(Object.keys(obj), patterns, options);
    let res = {};
    for (let key of keys)res[key] = obj[key];
    return res;
};
/**
 * Returns true if some of the strings in the given `list` match any of the given glob `patterns`.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.some(list, patterns[, options]);
 *
 * console.log(mm.some(['foo.js', 'bar.js'], ['*.js', '!foo.js']));
 * // true
 * console.log(mm.some(['foo.js'], ['*.js', '!foo.js']));
 * // false
 * ```
 * @param {String|Array} `list` The string or array of strings to test. Returns as soon as the first match is found.
 * @param {String|Array} `patterns` One or more glob patterns to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Boolean} Returns true if any `patterns` matches any of the strings in `list`
 * @api public
 */ micromatch.some = (list, patterns, options)=>{
    let items = [].concat(list);
    for (let pattern of [].concat(patterns)){
        let isMatch = picomatch(String(pattern), options);
        if (items.some((item)=>isMatch(item))) {
            return true;
        }
    }
    return false;
};
/**
 * Returns true if every string in the given `list` matches
 * any of the given glob `patterns`.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.every(list, patterns[, options]);
 *
 * console.log(mm.every('foo.js', ['foo.js']));
 * // true
 * console.log(mm.every(['foo.js', 'bar.js'], ['*.js']));
 * // true
 * console.log(mm.every(['foo.js', 'bar.js'], ['*.js', '!foo.js']));
 * // false
 * console.log(mm.every(['foo.js'], ['*.js', '!foo.js']));
 * // false
 * ```
 * @param {String|Array} `list` The string or array of strings to test.
 * @param {String|Array} `patterns` One or more glob patterns to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Boolean} Returns true if all `patterns` matches all of the strings in `list`
 * @api public
 */ micromatch.every = (list, patterns, options)=>{
    let items = [].concat(list);
    for (let pattern of [].concat(patterns)){
        let isMatch = picomatch(String(pattern), options);
        if (!items.every((item)=>isMatch(item))) {
            return false;
        }
    }
    return true;
};
/**
 * Returns true if **all** of the given `patterns` match
 * the specified string.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.all(string, patterns[, options]);
 *
 * console.log(mm.all('foo.js', ['foo.js']));
 * // true
 *
 * console.log(mm.all('foo.js', ['*.js', '!foo.js']));
 * // false
 *
 * console.log(mm.all('foo.js', ['*.js', 'foo.js']));
 * // true
 *
 * console.log(mm.all('foo.js', ['*.js', 'f*', '*o*', '*o.js']));
 * // true
 * ```
 * @param {String|Array} `str` The string to test.
 * @param {String|Array} `patterns` One or more glob patterns to use for matching.
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Boolean} Returns true if any patterns match `str`
 * @api public
 */ micromatch.all = (str, patterns, options)=>{
    if (typeof str !== "string") {
        throw new TypeError(`Expected a string: "${util.inspect(str)}"`);
    }
    return [].concat(patterns).every((p)=>picomatch(p, options)(str));
};
/**
 * Returns an array of matches captured by `pattern` in `string, or `null` if the pattern did not match.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.capture(pattern, string[, options]);
 *
 * console.log(mm.capture('test/*.js', 'test/foo.js'));
 * //=> ['foo']
 * console.log(mm.capture('test/*.js', 'foo/bar.css'));
 * //=> null
 * ```
 * @param {String} `glob` Glob pattern to use for matching.
 * @param {String} `input` String to match
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Array|null} Returns an array of captures if the input matches the glob pattern, otherwise `null`.
 * @api public
 */ micromatch.capture = (glob, input, options)=>{
    let posix = utils.isWindows(options);
    let regex = picomatch.makeRe(String(glob), {
        ...options,
        capture: true
    });
    let match = regex.exec(posix ? utils.toPosixSlashes(input) : input);
    if (match) {
        return match.slice(1).map((v)=>v === void 0 ? "" : v);
    }
};
/**
 * Create a regular expression from the given glob `pattern`.
 *
 * ```js
 * const mm = require('micromatch');
 * // mm.makeRe(pattern[, options]);
 *
 * console.log(mm.makeRe('*.js'));
 * //=> /^(?:(\.[\\\/])?(?!\.)(?=.)[^\/]*?\.js)$/
 * ```
 * @param {String} `pattern` A glob pattern to convert to regex.
 * @param {Object} `options`
 * @return {RegExp} Returns a regex created from the given pattern.
 * @api public
 */ micromatch.makeRe = (...args)=>picomatch.makeRe(...args);
/**
 * Scan a glob pattern to separate the pattern into segments. Used
 * by the [split](#split) method.
 *
 * ```js
 * const mm = require('micromatch');
 * const state = mm.scan(pattern[, options]);
 * ```
 * @param {String} `pattern`
 * @param {Object} `options`
 * @return {Object} Returns an object with
 * @api public
 */ micromatch.scan = (...args)=>picomatch.scan(...args);
/**
 * Parse a glob pattern to create the source string for a regular
 * expression.
 *
 * ```js
 * const mm = require('micromatch');
 * const state = mm.parse(pattern[, options]);
 * ```
 * @param {String} `glob`
 * @param {Object} `options`
 * @return {Object} Returns an object with useful properties and output to be used as regex source string.
 * @api public
 */ micromatch.parse = (patterns, options)=>{
    let res = [];
    for (let pattern of [].concat(patterns || [])){
        for (let str of braces(String(pattern), options)){
            res.push(picomatch.parse(str, options));
        }
    }
    return res;
};
/**
 * Process the given brace `pattern`.
 *
 * ```js
 * const { braces } = require('micromatch');
 * console.log(braces('foo/{a,b,c}/bar'));
 * //=> [ 'foo/(a|b|c)/bar' ]
 *
 * console.log(braces('foo/{a,b,c}/bar', { expand: true }));
 * //=> [ 'foo/a/bar', 'foo/b/bar', 'foo/c/bar' ]
 * ```
 * @param {String} `pattern` String with brace pattern to process.
 * @param {Object} `options` Any [options](#options) to change how expansion is performed. See the [braces][] library for all available options.
 * @return {Array}
 * @api public
 */ micromatch.braces = (pattern, options)=>{
    if (typeof pattern !== "string") throw new TypeError("Expected a string");
    if (options && options.nobrace === true || !/\{.*\}/.test(pattern)) {
        return [
            pattern
        ];
    }
    return braces(pattern, options);
};
/**
 * Expand braces
 */ micromatch.braceExpand = (pattern, options)=>{
    if (typeof pattern !== "string") throw new TypeError("Expected a string");
    return micromatch.braces(pattern, {
        ...options,
        expand: true
    });
};
/**
 * Expose micromatch
 */ module.exports = micromatch;


/***/ }),

/***/ 265:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(85920);


/***/ }),

/***/ 16647:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const path = __webpack_require__(71017);
const WIN_SLASH = "\\\\/";
const WIN_NO_SLASH = `[^${WIN_SLASH}]`;
/**
 * Posix glob regex
 */ const DOT_LITERAL = "\\.";
const PLUS_LITERAL = "\\+";
const QMARK_LITERAL = "\\?";
const SLASH_LITERAL = "\\/";
const ONE_CHAR = "(?=.)";
const QMARK = "[^/]";
const END_ANCHOR = `(?:${SLASH_LITERAL}|$)`;
const START_ANCHOR = `(?:^|${SLASH_LITERAL})`;
const DOTS_SLASH = `${DOT_LITERAL}{1,2}${END_ANCHOR}`;
const NO_DOT = `(?!${DOT_LITERAL})`;
const NO_DOTS = `(?!${START_ANCHOR}${DOTS_SLASH})`;
const NO_DOT_SLASH = `(?!${DOT_LITERAL}{0,1}${END_ANCHOR})`;
const NO_DOTS_SLASH = `(?!${DOTS_SLASH})`;
const QMARK_NO_DOT = `[^.${SLASH_LITERAL}]`;
const STAR = `${QMARK}*?`;
const POSIX_CHARS = {
    DOT_LITERAL,
    PLUS_LITERAL,
    QMARK_LITERAL,
    SLASH_LITERAL,
    ONE_CHAR,
    QMARK,
    END_ANCHOR,
    DOTS_SLASH,
    NO_DOT,
    NO_DOTS,
    NO_DOT_SLASH,
    NO_DOTS_SLASH,
    QMARK_NO_DOT,
    STAR,
    START_ANCHOR
};
/**
 * Windows glob regex
 */ const WINDOWS_CHARS = {
    ...POSIX_CHARS,
    SLASH_LITERAL: `[${WIN_SLASH}]`,
    QMARK: WIN_NO_SLASH,
    STAR: `${WIN_NO_SLASH}*?`,
    DOTS_SLASH: `${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$)`,
    NO_DOT: `(?!${DOT_LITERAL})`,
    NO_DOTS: `(?!(?:^|[${WIN_SLASH}])${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
    NO_DOT_SLASH: `(?!${DOT_LITERAL}{0,1}(?:[${WIN_SLASH}]|$))`,
    NO_DOTS_SLASH: `(?!${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
    QMARK_NO_DOT: `[^.${WIN_SLASH}]`,
    START_ANCHOR: `(?:^|[${WIN_SLASH}])`,
    END_ANCHOR: `(?:[${WIN_SLASH}]|$)`
};
/**
 * POSIX Bracket Regex
 */ const POSIX_REGEX_SOURCE = {
    alnum: "a-zA-Z0-9",
    alpha: "a-zA-Z",
    ascii: "\\x00-\\x7F",
    blank: " \\t",
    cntrl: "\\x00-\\x1F\\x7F",
    digit: "0-9",
    graph: "\\x21-\\x7E",
    lower: "a-z",
    print: "\\x20-\\x7E ",
    punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",
    space: " \\t\\r\\n\\v\\f",
    upper: "A-Z",
    word: "A-Za-z0-9_",
    xdigit: "A-Fa-f0-9"
};
module.exports = {
    MAX_LENGTH: 1024 * 64,
    POSIX_REGEX_SOURCE,
    // regular expressions
    REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
    REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
    REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
    REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
    REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
    REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
    // Replace globs with equivalent patterns to reduce parsing time.
    REPLACEMENTS: {
        "***": "*",
        "**/**": "**",
        "**/**/**": "**"
    },
    // Digits
    CHAR_0: 48,
    /* 0 */ CHAR_9: 57,
    /* 9 */ // Alphabet chars.
    CHAR_UPPERCASE_A: 65,
    /* A */ CHAR_LOWERCASE_A: 97,
    /* a */ CHAR_UPPERCASE_Z: 90,
    /* Z */ CHAR_LOWERCASE_Z: 122,
    /* z */ CHAR_LEFT_PARENTHESES: 40,
    /* ( */ CHAR_RIGHT_PARENTHESES: 41,
    /* ) */ CHAR_ASTERISK: 42,
    /* * */ // Non-alphabetic chars.
    CHAR_AMPERSAND: 38,
    /* & */ CHAR_AT: 64,
    /* @ */ CHAR_BACKWARD_SLASH: 92,
    /* \ */ CHAR_CARRIAGE_RETURN: 13,
    /* \r */ CHAR_CIRCUMFLEX_ACCENT: 94,
    /* ^ */ CHAR_COLON: 58,
    /* : */ CHAR_COMMA: 44,
    /* , */ CHAR_DOT: 46,
    /* . */ CHAR_DOUBLE_QUOTE: 34,
    /* " */ CHAR_EQUAL: 61,
    /* = */ CHAR_EXCLAMATION_MARK: 33,
    /* ! */ CHAR_FORM_FEED: 12,
    /* \f */ CHAR_FORWARD_SLASH: 47,
    /* / */ CHAR_GRAVE_ACCENT: 96,
    /* ` */ CHAR_HASH: 35,
    /* # */ CHAR_HYPHEN_MINUS: 45,
    /* - */ CHAR_LEFT_ANGLE_BRACKET: 60,
    /* < */ CHAR_LEFT_CURLY_BRACE: 123,
    /* { */ CHAR_LEFT_SQUARE_BRACKET: 91,
    /* [ */ CHAR_LINE_FEED: 10,
    /* \n */ CHAR_NO_BREAK_SPACE: 160,
    /* \u00A0 */ CHAR_PERCENT: 37,
    /* % */ CHAR_PLUS: 43,
    /* + */ CHAR_QUESTION_MARK: 63,
    /* ? */ CHAR_RIGHT_ANGLE_BRACKET: 62,
    /* > */ CHAR_RIGHT_CURLY_BRACE: 125,
    /* } */ CHAR_RIGHT_SQUARE_BRACKET: 93,
    /* ] */ CHAR_SEMICOLON: 59,
    /* ; */ CHAR_SINGLE_QUOTE: 39,
    /* ' */ CHAR_SPACE: 32,
    /*   */ CHAR_TAB: 9,
    /* \t */ CHAR_UNDERSCORE: 95,
    /* _ */ CHAR_VERTICAL_LINE: 124,
    /* | */ CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,
    /* \uFEFF */ SEP: path.sep,
    /**
   * Create EXTGLOB_CHARS
   */ extglobChars (chars) {
        return {
            "!": {
                type: "negate",
                open: "(?:(?!(?:",
                close: `))${chars.STAR})`
            },
            "?": {
                type: "qmark",
                open: "(?:",
                close: ")?"
            },
            "+": {
                type: "plus",
                open: "(?:",
                close: ")+"
            },
            "*": {
                type: "star",
                open: "(?:",
                close: ")*"
            },
            "@": {
                type: "at",
                open: "(?:",
                close: ")"
            }
        };
    },
    /**
   * Create GLOB_CHARS
   */ globChars (win32) {
        return win32 === true ? WINDOWS_CHARS : POSIX_CHARS;
    }
};


/***/ }),

/***/ 66139:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const constants = __webpack_require__(16647);
const utils = __webpack_require__(68157);
/**
 * Constants
 */ const { MAX_LENGTH, POSIX_REGEX_SOURCE, REGEX_NON_SPECIAL_CHARS, REGEX_SPECIAL_CHARS_BACKREF, REPLACEMENTS } = constants;
/**
 * Helpers
 */ const expandRange = (args, options)=>{
    if (typeof options.expandRange === "function") {
        return options.expandRange(...args, options);
    }
    args.sort();
    const value = `[${args.join("-")}]`;
    try {
        /* eslint-disable-next-line no-new */ new RegExp(value);
    } catch (ex) {
        return args.map((v)=>utils.escapeRegex(v)).join("..");
    }
    return value;
};
/**
 * Create the message for a syntax error
 */ const syntaxError = (type, char)=>{
    return `Missing ${type}: "${char}" - use "\\\\${char}" to match literal characters`;
};
/**
 * Parse the given input string.
 * @param {String} input
 * @param {Object} options
 * @return {Object}
 */ const parse = (input, options)=>{
    if (typeof input !== "string") {
        throw new TypeError("Expected a string");
    }
    input = REPLACEMENTS[input] || input;
    const opts = {
        ...options
    };
    const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
    let len = input.length;
    if (len > max) {
        throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
    }
    const bos = {
        type: "bos",
        value: "",
        output: opts.prepend || ""
    };
    const tokens = [
        bos
    ];
    const capture = opts.capture ? "" : "?:";
    const win32 = utils.isWindows(options);
    // create constants based on platform, for windows or posix
    const PLATFORM_CHARS = constants.globChars(win32);
    const EXTGLOB_CHARS = constants.extglobChars(PLATFORM_CHARS);
    const { DOT_LITERAL, PLUS_LITERAL, SLASH_LITERAL, ONE_CHAR, DOTS_SLASH, NO_DOT, NO_DOT_SLASH, NO_DOTS_SLASH, QMARK, QMARK_NO_DOT, STAR, START_ANCHOR } = PLATFORM_CHARS;
    const globstar = (opts)=>{
        return `(${capture}(?:(?!${START_ANCHOR}${opts.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
    };
    const nodot = opts.dot ? "" : NO_DOT;
    const qmarkNoDot = opts.dot ? QMARK : QMARK_NO_DOT;
    let star = opts.bash === true ? globstar(opts) : STAR;
    if (opts.capture) {
        star = `(${star})`;
    }
    // minimatch options support
    if (typeof opts.noext === "boolean") {
        opts.noextglob = opts.noext;
    }
    const state = {
        input,
        index: -1,
        start: 0,
        dot: opts.dot === true,
        consumed: "",
        output: "",
        prefix: "",
        backtrack: false,
        negated: false,
        brackets: 0,
        braces: 0,
        parens: 0,
        quotes: 0,
        globstar: false,
        tokens
    };
    input = utils.removePrefix(input, state);
    len = input.length;
    const extglobs = [];
    const braces = [];
    const stack = [];
    let prev = bos;
    let value;
    /**
   * Tokenizing helpers
   */ const eos = ()=>state.index === len - 1;
    const peek = state.peek = (n = 1)=>input[state.index + n];
    const advance = state.advance = ()=>input[++state.index] || "";
    const remaining = ()=>input.slice(state.index + 1);
    const consume = (value = "", num = 0)=>{
        state.consumed += value;
        state.index += num;
    };
    const append = (token)=>{
        state.output += token.output != null ? token.output : token.value;
        consume(token.value);
    };
    const negate = ()=>{
        let count = 1;
        while(peek() === "!" && (peek(2) !== "(" || peek(3) === "?")){
            advance();
            state.start++;
            count++;
        }
        if (count % 2 === 0) {
            return false;
        }
        state.negated = true;
        state.start++;
        return true;
    };
    const increment = (type)=>{
        state[type]++;
        stack.push(type);
    };
    const decrement = (type)=>{
        state[type]--;
        stack.pop();
    };
    /**
   * Push tokens onto the tokens array. This helper speeds up
   * tokenizing by 1) helping us avoid backtracking as much as possible,
   * and 2) helping us avoid creating extra tokens when consecutive
   * characters are plain text. This improves performance and simplifies
   * lookbehinds.
   */ const push = (tok)=>{
        if (prev.type === "globstar") {
            const isBrace = state.braces > 0 && (tok.type === "comma" || tok.type === "brace");
            const isExtglob = tok.extglob === true || extglobs.length && (tok.type === "pipe" || tok.type === "paren");
            if (tok.type !== "slash" && tok.type !== "paren" && !isBrace && !isExtglob) {
                state.output = state.output.slice(0, -prev.output.length);
                prev.type = "star";
                prev.value = "*";
                prev.output = star;
                state.output += prev.output;
            }
        }
        if (extglobs.length && tok.type !== "paren") {
            extglobs[extglobs.length - 1].inner += tok.value;
        }
        if (tok.value || tok.output) append(tok);
        if (prev && prev.type === "text" && tok.type === "text") {
            prev.value += tok.value;
            prev.output = (prev.output || "") + tok.value;
            return;
        }
        tok.prev = prev;
        tokens.push(tok);
        prev = tok;
    };
    const extglobOpen = (type, value)=>{
        const token = {
            ...EXTGLOB_CHARS[value],
            conditions: 1,
            inner: ""
        };
        token.prev = prev;
        token.parens = state.parens;
        token.output = state.output;
        const output = (opts.capture ? "(" : "") + token.open;
        increment("parens");
        push({
            type,
            value,
            output: state.output ? "" : ONE_CHAR
        });
        push({
            type: "paren",
            extglob: true,
            value: advance(),
            output
        });
        extglobs.push(token);
    };
    const extglobClose = (token)=>{
        let output = token.close + (opts.capture ? ")" : "");
        let rest;
        if (token.type === "negate") {
            let extglobStar = star;
            if (token.inner && token.inner.length > 1 && token.inner.includes("/")) {
                extglobStar = globstar(opts);
            }
            if (extglobStar !== star || eos() || /^\)+$/.test(remaining())) {
                output = token.close = `)$))${extglobStar}`;
            }
            if (token.inner.includes("*") && (rest = remaining()) && /^\.[^\\/.]+$/.test(rest)) {
                // Any non-magical string (`.ts`) or even nested expression (`.{ts,tsx}`) can follow after the closing parenthesis.
                // In this case, we need to parse the string and use it in the output of the original pattern.
                // Suitable patterns: `/!(*.d).ts`, `/!(*.d).{ts,tsx}`, `**/!(*-dbg).@(js)`.
                //
                // Disabling the `fastpaths` option due to a problem with parsing strings as `.ts` in the pattern like `**/!(*.d).ts`.
                const expression = parse(rest, {
                    ...options,
                    fastpaths: false
                }).output;
                output = token.close = `)${expression})${extglobStar})`;
            }
            if (token.prev.type === "bos") {
                state.negatedExtglob = true;
            }
        }
        push({
            type: "paren",
            extglob: true,
            value,
            output
        });
        decrement("parens");
    };
    /**
   * Fast paths
   */ if (opts.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(input)) {
        let backslashes = false;
        let output = input.replace(REGEX_SPECIAL_CHARS_BACKREF, (m, esc, chars, first, rest, index)=>{
            if (first === "\\") {
                backslashes = true;
                return m;
            }
            if (first === "?") {
                if (esc) {
                    return esc + first + (rest ? QMARK.repeat(rest.length) : "");
                }
                if (index === 0) {
                    return qmarkNoDot + (rest ? QMARK.repeat(rest.length) : "");
                }
                return QMARK.repeat(chars.length);
            }
            if (first === ".") {
                return DOT_LITERAL.repeat(chars.length);
            }
            if (first === "*") {
                if (esc) {
                    return esc + first + (rest ? star : "");
                }
                return star;
            }
            return esc ? m : `\\${m}`;
        });
        if (backslashes === true) {
            if (opts.unescape === true) {
                output = output.replace(/\\/g, "");
            } else {
                output = output.replace(/\\+/g, (m)=>{
                    return m.length % 2 === 0 ? "\\\\" : m ? "\\" : "";
                });
            }
        }
        if (output === input && opts.contains === true) {
            state.output = input;
            return state;
        }
        state.output = utils.wrapOutput(output, state, options);
        return state;
    }
    /**
   * Tokenize input until we reach end-of-string
   */ while(!eos()){
        value = advance();
        if (value === "\x00") {
            continue;
        }
        /**
     * Escaped characters
     */ if (value === "\\") {
            const next = peek();
            if (next === "/" && opts.bash !== true) {
                continue;
            }
            if (next === "." || next === ";") {
                continue;
            }
            if (!next) {
                value += "\\";
                push({
                    type: "text",
                    value
                });
                continue;
            }
            // collapse slashes to reduce potential for exploits
            const match = /^\\+/.exec(remaining());
            let slashes = 0;
            if (match && match[0].length > 2) {
                slashes = match[0].length;
                state.index += slashes;
                if (slashes % 2 !== 0) {
                    value += "\\";
                }
            }
            if (opts.unescape === true) {
                value = advance();
            } else {
                value += advance();
            }
            if (state.brackets === 0) {
                push({
                    type: "text",
                    value
                });
                continue;
            }
        }
        /**
     * If we're inside a regex character class, continue
     * until we reach the closing bracket.
     */ if (state.brackets > 0 && (value !== "]" || prev.value === "[" || prev.value === "[^")) {
            if (opts.posix !== false && value === ":") {
                const inner = prev.value.slice(1);
                if (inner.includes("[")) {
                    prev.posix = true;
                    if (inner.includes(":")) {
                        const idx = prev.value.lastIndexOf("[");
                        const pre = prev.value.slice(0, idx);
                        const rest = prev.value.slice(idx + 2);
                        const posix = POSIX_REGEX_SOURCE[rest];
                        if (posix) {
                            prev.value = pre + posix;
                            state.backtrack = true;
                            advance();
                            if (!bos.output && tokens.indexOf(prev) === 1) {
                                bos.output = ONE_CHAR;
                            }
                            continue;
                        }
                    }
                }
            }
            if (value === "[" && peek() !== ":" || value === "-" && peek() === "]") {
                value = `\\${value}`;
            }
            if (value === "]" && (prev.value === "[" || prev.value === "[^")) {
                value = `\\${value}`;
            }
            if (opts.posix === true && value === "!" && prev.value === "[") {
                value = "^";
            }
            prev.value += value;
            append({
                value
            });
            continue;
        }
        /**
     * If we're inside a quoted string, continue
     * until we reach the closing double quote.
     */ if (state.quotes === 1 && value !== '"') {
            value = utils.escapeRegex(value);
            prev.value += value;
            append({
                value
            });
            continue;
        }
        /**
     * Double quotes
     */ if (value === '"') {
            state.quotes = state.quotes === 1 ? 0 : 1;
            if (opts.keepQuotes === true) {
                push({
                    type: "text",
                    value
                });
            }
            continue;
        }
        /**
     * Parentheses
     */ if (value === "(") {
            increment("parens");
            push({
                type: "paren",
                value
            });
            continue;
        }
        if (value === ")") {
            if (state.parens === 0 && opts.strictBrackets === true) {
                throw new SyntaxError(syntaxError("opening", "("));
            }
            const extglob = extglobs[extglobs.length - 1];
            if (extglob && state.parens === extglob.parens + 1) {
                extglobClose(extglobs.pop());
                continue;
            }
            push({
                type: "paren",
                value,
                output: state.parens ? ")" : "\\)"
            });
            decrement("parens");
            continue;
        }
        /**
     * Square brackets
     */ if (value === "[") {
            if (opts.nobracket === true || !remaining().includes("]")) {
                if (opts.nobracket !== true && opts.strictBrackets === true) {
                    throw new SyntaxError(syntaxError("closing", "]"));
                }
                value = `\\${value}`;
            } else {
                increment("brackets");
            }
            push({
                type: "bracket",
                value
            });
            continue;
        }
        if (value === "]") {
            if (opts.nobracket === true || prev && prev.type === "bracket" && prev.value.length === 1) {
                push({
                    type: "text",
                    value,
                    output: `\\${value}`
                });
                continue;
            }
            if (state.brackets === 0) {
                if (opts.strictBrackets === true) {
                    throw new SyntaxError(syntaxError("opening", "["));
                }
                push({
                    type: "text",
                    value,
                    output: `\\${value}`
                });
                continue;
            }
            decrement("brackets");
            const prevValue = prev.value.slice(1);
            if (prev.posix !== true && prevValue[0] === "^" && !prevValue.includes("/")) {
                value = `/${value}`;
            }
            prev.value += value;
            append({
                value
            });
            // when literal brackets are explicitly disabled
            // assume we should match with a regex character class
            if (opts.literalBrackets === false || utils.hasRegexChars(prevValue)) {
                continue;
            }
            const escaped = utils.escapeRegex(prev.value);
            state.output = state.output.slice(0, -prev.value.length);
            // when literal brackets are explicitly enabled
            // assume we should escape the brackets to match literal characters
            if (opts.literalBrackets === true) {
                state.output += escaped;
                prev.value = escaped;
                continue;
            }
            // when the user specifies nothing, try to match both
            prev.value = `(${capture}${escaped}|${prev.value})`;
            state.output += prev.value;
            continue;
        }
        /**
     * Braces
     */ if (value === "{" && opts.nobrace !== true) {
            increment("braces");
            const open = {
                type: "brace",
                value,
                output: "(",
                outputIndex: state.output.length,
                tokensIndex: state.tokens.length
            };
            braces.push(open);
            push(open);
            continue;
        }
        if (value === "}") {
            const brace = braces[braces.length - 1];
            if (opts.nobrace === true || !brace) {
                push({
                    type: "text",
                    value,
                    output: value
                });
                continue;
            }
            let output = ")";
            if (brace.dots === true) {
                const arr = tokens.slice();
                const range = [];
                for(let i = arr.length - 1; i >= 0; i--){
                    tokens.pop();
                    if (arr[i].type === "brace") {
                        break;
                    }
                    if (arr[i].type !== "dots") {
                        range.unshift(arr[i].value);
                    }
                }
                output = expandRange(range, opts);
                state.backtrack = true;
            }
            if (brace.comma !== true && brace.dots !== true) {
                const out = state.output.slice(0, brace.outputIndex);
                const toks = state.tokens.slice(brace.tokensIndex);
                brace.value = brace.output = "\\{";
                value = output = "\\}";
                state.output = out;
                for (const t of toks){
                    state.output += t.output || t.value;
                }
            }
            push({
                type: "brace",
                value,
                output
            });
            decrement("braces");
            braces.pop();
            continue;
        }
        /**
     * Pipes
     */ if (value === "|") {
            if (extglobs.length > 0) {
                extglobs[extglobs.length - 1].conditions++;
            }
            push({
                type: "text",
                value
            });
            continue;
        }
        /**
     * Commas
     */ if (value === ",") {
            let output = value;
            const brace = braces[braces.length - 1];
            if (brace && stack[stack.length - 1] === "braces") {
                brace.comma = true;
                output = "|";
            }
            push({
                type: "comma",
                value,
                output
            });
            continue;
        }
        /**
     * Slashes
     */ if (value === "/") {
            // if the beginning of the glob is "./", advance the start
            // to the current index, and don't add the "./" characters
            // to the state. This greatly simplifies lookbehinds when
            // checking for BOS characters like "!" and "." (not "./")
            if (prev.type === "dot" && state.index === state.start + 1) {
                state.start = state.index + 1;
                state.consumed = "";
                state.output = "";
                tokens.pop();
                prev = bos; // reset "prev" to the first token
                continue;
            }
            push({
                type: "slash",
                value,
                output: SLASH_LITERAL
            });
            continue;
        }
        /**
     * Dots
     */ if (value === ".") {
            if (state.braces > 0 && prev.type === "dot") {
                if (prev.value === ".") prev.output = DOT_LITERAL;
                const brace = braces[braces.length - 1];
                prev.type = "dots";
                prev.output += value;
                prev.value += value;
                brace.dots = true;
                continue;
            }
            if (state.braces + state.parens === 0 && prev.type !== "bos" && prev.type !== "slash") {
                push({
                    type: "text",
                    value,
                    output: DOT_LITERAL
                });
                continue;
            }
            push({
                type: "dot",
                value,
                output: DOT_LITERAL
            });
            continue;
        }
        /**
     * Question marks
     */ if (value === "?") {
            const isGroup = prev && prev.value === "(";
            if (!isGroup && opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
                extglobOpen("qmark", value);
                continue;
            }
            if (prev && prev.type === "paren") {
                const next = peek();
                let output = value;
                if (next === "<" && !utils.supportsLookbehinds()) {
                    throw new Error("Node.js v10 or higher is required for regex lookbehinds");
                }
                if (prev.value === "(" && !/[!=<:]/.test(next) || next === "<" && !/<([!=]|\w+>)/.test(remaining())) {
                    output = `\\${value}`;
                }
                push({
                    type: "text",
                    value,
                    output
                });
                continue;
            }
            if (opts.dot !== true && (prev.type === "slash" || prev.type === "bos")) {
                push({
                    type: "qmark",
                    value,
                    output: QMARK_NO_DOT
                });
                continue;
            }
            push({
                type: "qmark",
                value,
                output: QMARK
            });
            continue;
        }
        /**
     * Exclamation
     */ if (value === "!") {
            if (opts.noextglob !== true && peek() === "(") {
                if (peek(2) !== "?" || !/[!=<:]/.test(peek(3))) {
                    extglobOpen("negate", value);
                    continue;
                }
            }
            if (opts.nonegate !== true && state.index === 0) {
                negate();
                continue;
            }
        }
        /**
     * Plus
     */ if (value === "+") {
            if (opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
                extglobOpen("plus", value);
                continue;
            }
            if (prev && prev.value === "(" || opts.regex === false) {
                push({
                    type: "plus",
                    value,
                    output: PLUS_LITERAL
                });
                continue;
            }
            if (prev && (prev.type === "bracket" || prev.type === "paren" || prev.type === "brace") || state.parens > 0) {
                push({
                    type: "plus",
                    value
                });
                continue;
            }
            push({
                type: "plus",
                value: PLUS_LITERAL
            });
            continue;
        }
        /**
     * Plain text
     */ if (value === "@") {
            if (opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
                push({
                    type: "at",
                    extglob: true,
                    value,
                    output: ""
                });
                continue;
            }
            push({
                type: "text",
                value
            });
            continue;
        }
        /**
     * Plain text
     */ if (value !== "*") {
            if (value === "$" || value === "^") {
                value = `\\${value}`;
            }
            const match = REGEX_NON_SPECIAL_CHARS.exec(remaining());
            if (match) {
                value += match[0];
                state.index += match[0].length;
            }
            push({
                type: "text",
                value
            });
            continue;
        }
        /**
     * Stars
     */ if (prev && (prev.type === "globstar" || prev.star === true)) {
            prev.type = "star";
            prev.star = true;
            prev.value += value;
            prev.output = star;
            state.backtrack = true;
            state.globstar = true;
            consume(value);
            continue;
        }
        let rest = remaining();
        if (opts.noextglob !== true && /^\([^?]/.test(rest)) {
            extglobOpen("star", value);
            continue;
        }
        if (prev.type === "star") {
            if (opts.noglobstar === true) {
                consume(value);
                continue;
            }
            const prior = prev.prev;
            const before = prior.prev;
            const isStart = prior.type === "slash" || prior.type === "bos";
            const afterStar = before && (before.type === "star" || before.type === "globstar");
            if (opts.bash === true && (!isStart || rest[0] && rest[0] !== "/")) {
                push({
                    type: "star",
                    value,
                    output: ""
                });
                continue;
            }
            const isBrace = state.braces > 0 && (prior.type === "comma" || prior.type === "brace");
            const isExtglob = extglobs.length && (prior.type === "pipe" || prior.type === "paren");
            if (!isStart && prior.type !== "paren" && !isBrace && !isExtglob) {
                push({
                    type: "star",
                    value,
                    output: ""
                });
                continue;
            }
            // strip consecutive `/**/`
            while(rest.slice(0, 3) === "/**"){
                const after = input[state.index + 4];
                if (after && after !== "/") {
                    break;
                }
                rest = rest.slice(3);
                consume("/**", 3);
            }
            if (prior.type === "bos" && eos()) {
                prev.type = "globstar";
                prev.value += value;
                prev.output = globstar(opts);
                state.output = prev.output;
                state.globstar = true;
                consume(value);
                continue;
            }
            if (prior.type === "slash" && prior.prev.type !== "bos" && !afterStar && eos()) {
                state.output = state.output.slice(0, -(prior.output + prev.output).length);
                prior.output = `(?:${prior.output}`;
                prev.type = "globstar";
                prev.output = globstar(opts) + (opts.strictSlashes ? ")" : "|$)");
                prev.value += value;
                state.globstar = true;
                state.output += prior.output + prev.output;
                consume(value);
                continue;
            }
            if (prior.type === "slash" && prior.prev.type !== "bos" && rest[0] === "/") {
                const end = rest[1] !== void 0 ? "|$" : "";
                state.output = state.output.slice(0, -(prior.output + prev.output).length);
                prior.output = `(?:${prior.output}`;
                prev.type = "globstar";
                prev.output = `${globstar(opts)}${SLASH_LITERAL}|${SLASH_LITERAL}${end})`;
                prev.value += value;
                state.output += prior.output + prev.output;
                state.globstar = true;
                consume(value + advance());
                push({
                    type: "slash",
                    value: "/",
                    output: ""
                });
                continue;
            }
            if (prior.type === "bos" && rest[0] === "/") {
                prev.type = "globstar";
                prev.value += value;
                prev.output = `(?:^|${SLASH_LITERAL}|${globstar(opts)}${SLASH_LITERAL})`;
                state.output = prev.output;
                state.globstar = true;
                consume(value + advance());
                push({
                    type: "slash",
                    value: "/",
                    output: ""
                });
                continue;
            }
            // remove single star from output
            state.output = state.output.slice(0, -prev.output.length);
            // reset previous token to globstar
            prev.type = "globstar";
            prev.output = globstar(opts);
            prev.value += value;
            // reset output with globstar
            state.output += prev.output;
            state.globstar = true;
            consume(value);
            continue;
        }
        const token = {
            type: "star",
            value,
            output: star
        };
        if (opts.bash === true) {
            token.output = ".*?";
            if (prev.type === "bos" || prev.type === "slash") {
                token.output = nodot + token.output;
            }
            push(token);
            continue;
        }
        if (prev && (prev.type === "bracket" || prev.type === "paren") && opts.regex === true) {
            token.output = value;
            push(token);
            continue;
        }
        if (state.index === state.start || prev.type === "slash" || prev.type === "dot") {
            if (prev.type === "dot") {
                state.output += NO_DOT_SLASH;
                prev.output += NO_DOT_SLASH;
            } else if (opts.dot === true) {
                state.output += NO_DOTS_SLASH;
                prev.output += NO_DOTS_SLASH;
            } else {
                state.output += nodot;
                prev.output += nodot;
            }
            if (peek() !== "*") {
                state.output += ONE_CHAR;
                prev.output += ONE_CHAR;
            }
        }
        push(token);
    }
    while(state.brackets > 0){
        if (opts.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "]"));
        state.output = utils.escapeLast(state.output, "[");
        decrement("brackets");
    }
    while(state.parens > 0){
        if (opts.strictBrackets === true) throw new SyntaxError(syntaxError("closing", ")"));
        state.output = utils.escapeLast(state.output, "(");
        decrement("parens");
    }
    while(state.braces > 0){
        if (opts.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "}"));
        state.output = utils.escapeLast(state.output, "{");
        decrement("braces");
    }
    if (opts.strictSlashes !== true && (prev.type === "star" || prev.type === "bracket")) {
        push({
            type: "maybe_slash",
            value: "",
            output: `${SLASH_LITERAL}?`
        });
    }
    // rebuild the output if we had to backtrack at any point
    if (state.backtrack === true) {
        state.output = "";
        for (const token of state.tokens){
            state.output += token.output != null ? token.output : token.value;
            if (token.suffix) {
                state.output += token.suffix;
            }
        }
    }
    return state;
};
/**
 * Fast paths for creating regular expressions for common glob patterns.
 * This can significantly speed up processing and has very little downside
 * impact when none of the fast paths match.
 */ parse.fastpaths = (input, options)=>{
    const opts = {
        ...options
    };
    const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
    const len = input.length;
    if (len > max) {
        throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
    }
    input = REPLACEMENTS[input] || input;
    const win32 = utils.isWindows(options);
    // create constants based on platform, for windows or posix
    const { DOT_LITERAL, SLASH_LITERAL, ONE_CHAR, DOTS_SLASH, NO_DOT, NO_DOTS, NO_DOTS_SLASH, STAR, START_ANCHOR } = constants.globChars(win32);
    const nodot = opts.dot ? NO_DOTS : NO_DOT;
    const slashDot = opts.dot ? NO_DOTS_SLASH : NO_DOT;
    const capture = opts.capture ? "" : "?:";
    const state = {
        negated: false,
        prefix: ""
    };
    let star = opts.bash === true ? ".*?" : STAR;
    if (opts.capture) {
        star = `(${star})`;
    }
    const globstar = (opts)=>{
        if (opts.noglobstar === true) return star;
        return `(${capture}(?:(?!${START_ANCHOR}${opts.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
    };
    const create = (str)=>{
        switch(str){
            case "*":
                return `${nodot}${ONE_CHAR}${star}`;
            case ".*":
                return `${DOT_LITERAL}${ONE_CHAR}${star}`;
            case "*.*":
                return `${nodot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;
            case "*/*":
                return `${nodot}${star}${SLASH_LITERAL}${ONE_CHAR}${slashDot}${star}`;
            case "**":
                return nodot + globstar(opts);
            case "**/*":
                return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${ONE_CHAR}${star}`;
            case "**/*.*":
                return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;
            case "**/.*":
                return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${DOT_LITERAL}${ONE_CHAR}${star}`;
            default:
                {
                    const match = /^(.*?)\.(\w+)$/.exec(str);
                    if (!match) return;
                    const source = create(match[1]);
                    if (!source) return;
                    return source + DOT_LITERAL + match[2];
                }
        }
    };
    const output = utils.removePrefix(input, state);
    let source = create(output);
    if (source && opts.strictSlashes !== true) {
        source += `${SLASH_LITERAL}?`;
    }
    return source;
};
module.exports = parse;


/***/ }),

/***/ 85920:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const path = __webpack_require__(71017);
const scan = __webpack_require__(79569);
const parse = __webpack_require__(66139);
const utils = __webpack_require__(68157);
const constants = __webpack_require__(16647);
const isObject = (val)=>val && typeof val === "object" && !Array.isArray(val);
/**
 * Creates a matcher function from one or more glob patterns. The
 * returned function takes a string to match as its first argument,
 * and returns true if the string is a match. The returned matcher
 * function also takes a boolean as the second argument that, when true,
 * returns an object with additional information.
 *
 * ```js
 * const picomatch = require('picomatch');
 * // picomatch(glob[, options]);
 *
 * const isMatch = picomatch('*.!(*a)');
 * console.log(isMatch('a.a')); //=> false
 * console.log(isMatch('a.b')); //=> true
 * ```
 * @name picomatch
 * @param {String|Array} `globs` One or more glob patterns.
 * @param {Object=} `options`
 * @return {Function=} Returns a matcher function.
 * @api public
 */ const picomatch = (glob, options, returnState = false)=>{
    if (Array.isArray(glob)) {
        const fns = glob.map((input)=>picomatch(input, options, returnState));
        const arrayMatcher = (str)=>{
            for (const isMatch of fns){
                const state = isMatch(str);
                if (state) return state;
            }
            return false;
        };
        return arrayMatcher;
    }
    const isState = isObject(glob) && glob.tokens && glob.input;
    if (glob === "" || typeof glob !== "string" && !isState) {
        throw new TypeError("Expected pattern to be a non-empty string");
    }
    const opts = options || {};
    const posix = utils.isWindows(options);
    const regex = isState ? picomatch.compileRe(glob, options) : picomatch.makeRe(glob, options, false, true);
    const state = regex.state;
    delete regex.state;
    let isIgnored = ()=>false;
    if (opts.ignore) {
        const ignoreOpts = {
            ...options,
            ignore: null,
            onMatch: null,
            onResult: null
        };
        isIgnored = picomatch(opts.ignore, ignoreOpts, returnState);
    }
    const matcher = (input, returnObject = false)=>{
        const { isMatch, match, output } = picomatch.test(input, regex, options, {
            glob,
            posix
        });
        const result = {
            glob,
            state,
            regex,
            posix,
            input,
            output,
            match,
            isMatch
        };
        if (typeof opts.onResult === "function") {
            opts.onResult(result);
        }
        if (isMatch === false) {
            result.isMatch = false;
            return returnObject ? result : false;
        }
        if (isIgnored(input)) {
            if (typeof opts.onIgnore === "function") {
                opts.onIgnore(result);
            }
            result.isMatch = false;
            return returnObject ? result : false;
        }
        if (typeof opts.onMatch === "function") {
            opts.onMatch(result);
        }
        return returnObject ? result : true;
    };
    if (returnState) {
        matcher.state = state;
    }
    return matcher;
};
/**
 * Test `input` with the given `regex`. This is used by the main
 * `picomatch()` function to test the input string.
 *
 * ```js
 * const picomatch = require('picomatch');
 * // picomatch.test(input, regex[, options]);
 *
 * console.log(picomatch.test('foo/bar', /^(?:([^/]*?)\/([^/]*?))$/));
 * // { isMatch: true, match: [ 'foo/', 'foo', 'bar' ], output: 'foo/bar' }
 * ```
 * @param {String} `input` String to test.
 * @param {RegExp} `regex`
 * @return {Object} Returns an object with matching info.
 * @api public
 */ picomatch.test = (input, regex, options, { glob, posix } = {})=>{
    if (typeof input !== "string") {
        throw new TypeError("Expected input to be a string");
    }
    if (input === "") {
        return {
            isMatch: false,
            output: ""
        };
    }
    const opts = options || {};
    const format = opts.format || (posix ? utils.toPosixSlashes : null);
    let match = input === glob;
    let output = match && format ? format(input) : input;
    if (match === false) {
        output = format ? format(input) : input;
        match = output === glob;
    }
    if (match === false || opts.capture === true) {
        if (opts.matchBase === true || opts.basename === true) {
            match = picomatch.matchBase(input, regex, options, posix);
        } else {
            match = regex.exec(output);
        }
    }
    return {
        isMatch: Boolean(match),
        match,
        output
    };
};
/**
 * Match the basename of a filepath.
 *
 * ```js
 * const picomatch = require('picomatch');
 * // picomatch.matchBase(input, glob[, options]);
 * console.log(picomatch.matchBase('foo/bar.js', '*.js'); // true
 * ```
 * @param {String} `input` String to test.
 * @param {RegExp|String} `glob` Glob pattern or regex created by [.makeRe](#makeRe).
 * @return {Boolean}
 * @api public
 */ picomatch.matchBase = (input, glob, options, posix = utils.isWindows(options))=>{
    const regex = glob instanceof RegExp ? glob : picomatch.makeRe(glob, options);
    return regex.test(path.basename(input));
};
/**
 * Returns true if **any** of the given glob `patterns` match the specified `string`.
 *
 * ```js
 * const picomatch = require('picomatch');
 * // picomatch.isMatch(string, patterns[, options]);
 *
 * console.log(picomatch.isMatch('a.a', ['b.*', '*.a'])); //=> true
 * console.log(picomatch.isMatch('a.a', 'b.*')); //=> false
 * ```
 * @param {String|Array} str The string to test.
 * @param {String|Array} patterns One or more glob patterns to use for matching.
 * @param {Object} [options] See available [options](#options).
 * @return {Boolean} Returns true if any patterns match `str`
 * @api public
 */ picomatch.isMatch = (str, patterns, options)=>picomatch(patterns, options)(str);
/**
 * Parse a glob pattern to create the source string for a regular
 * expression.
 *
 * ```js
 * const picomatch = require('picomatch');
 * const result = picomatch.parse(pattern[, options]);
 * ```
 * @param {String} `pattern`
 * @param {Object} `options`
 * @return {Object} Returns an object with useful properties and output to be used as a regex source string.
 * @api public
 */ picomatch.parse = (pattern, options)=>{
    if (Array.isArray(pattern)) return pattern.map((p)=>picomatch.parse(p, options));
    return parse(pattern, {
        ...options,
        fastpaths: false
    });
};
/**
 * Scan a glob pattern to separate the pattern into segments.
 *
 * ```js
 * const picomatch = require('picomatch');
 * // picomatch.scan(input[, options]);
 *
 * const result = picomatch.scan('!./foo/*.js');
 * console.log(result);
 * { prefix: '!./',
 *   input: '!./foo/*.js',
 *   start: 3,
 *   base: 'foo',
 *   glob: '*.js',
 *   isBrace: false,
 *   isBracket: false,
 *   isGlob: true,
 *   isExtglob: false,
 *   isGlobstar: false,
 *   negated: true }
 * ```
 * @param {String} `input` Glob pattern to scan.
 * @param {Object} `options`
 * @return {Object} Returns an object with
 * @api public
 */ picomatch.scan = (input, options)=>scan(input, options);
/**
 * Compile a regular expression from the `state` object returned by the
 * [parse()](#parse) method.
 *
 * @param {Object} `state`
 * @param {Object} `options`
 * @param {Boolean} `returnOutput` Intended for implementors, this argument allows you to return the raw output from the parser.
 * @param {Boolean} `returnState` Adds the state to a `state` property on the returned regex. Useful for implementors and debugging.
 * @return {RegExp}
 * @api public
 */ picomatch.compileRe = (state, options, returnOutput = false, returnState = false)=>{
    if (returnOutput === true) {
        return state.output;
    }
    const opts = options || {};
    const prepend = opts.contains ? "" : "^";
    const append = opts.contains ? "" : "$";
    let source = `${prepend}(?:${state.output})${append}`;
    if (state && state.negated === true) {
        source = `^(?!${source}).*$`;
    }
    const regex = picomatch.toRegex(source, options);
    if (returnState === true) {
        regex.state = state;
    }
    return regex;
};
/**
 * Create a regular expression from a parsed glob pattern.
 *
 * ```js
 * const picomatch = require('picomatch');
 * const state = picomatch.parse('*.js');
 * // picomatch.compileRe(state[, options]);
 *
 * console.log(picomatch.compileRe(state));
 * //=> /^(?:(?!\.)(?=.)[^/]*?\.js)$/
 * ```
 * @param {String} `state` The object returned from the `.parse` method.
 * @param {Object} `options`
 * @param {Boolean} `returnOutput` Implementors may use this argument to return the compiled output, instead of a regular expression. This is not exposed on the options to prevent end-users from mutating the result.
 * @param {Boolean} `returnState` Implementors may use this argument to return the state from the parsed glob with the returned regular expression.
 * @return {RegExp} Returns a regex created from the given pattern.
 * @api public
 */ picomatch.makeRe = (input, options = {}, returnOutput = false, returnState = false)=>{
    if (!input || typeof input !== "string") {
        throw new TypeError("Expected a non-empty string");
    }
    let parsed = {
        negated: false,
        fastpaths: true
    };
    if (options.fastpaths !== false && (input[0] === "." || input[0] === "*")) {
        parsed.output = parse.fastpaths(input, options);
    }
    if (!parsed.output) {
        parsed = parse(input, options);
    }
    return picomatch.compileRe(parsed, options, returnOutput, returnState);
};
/**
 * Create a regular expression from the given regex source string.
 *
 * ```js
 * const picomatch = require('picomatch');
 * // picomatch.toRegex(source[, options]);
 *
 * const { output } = picomatch.parse('*.js');
 * console.log(picomatch.toRegex(output));
 * //=> /^(?:(?!\.)(?=.)[^/]*?\.js)$/
 * ```
 * @param {String} `source` Regular expression source string.
 * @param {Object} `options`
 * @return {RegExp}
 * @api public
 */ picomatch.toRegex = (source, options)=>{
    try {
        const opts = options || {};
        return new RegExp(source, opts.flags || (opts.nocase ? "i" : ""));
    } catch (err) {
        if (options && options.debug === true) throw err;
        return /$^/;
    }
};
/**
 * Picomatch constants.
 * @return {Object}
 */ picomatch.constants = constants;
/**
 * Expose "picomatch"
 */ module.exports = picomatch;


/***/ }),

/***/ 79569:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const utils = __webpack_require__(68157);
const { CHAR_ASTERISK, /* * */ CHAR_AT, /* @ */ CHAR_BACKWARD_SLASH, /* \ */ CHAR_COMMA, /* , */ CHAR_DOT, /* . */ CHAR_EXCLAMATION_MARK, /* ! */ CHAR_FORWARD_SLASH, /* / */ CHAR_LEFT_CURLY_BRACE, /* { */ CHAR_LEFT_PARENTHESES, /* ( */ CHAR_LEFT_SQUARE_BRACKET, /* [ */ CHAR_PLUS, /* + */ CHAR_QUESTION_MARK, /* ? */ CHAR_RIGHT_CURLY_BRACE, /* } */ CHAR_RIGHT_PARENTHESES, /* ) */ CHAR_RIGHT_SQUARE_BRACKET/* ] */  } = __webpack_require__(16647);
const isPathSeparator = (code)=>{
    return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH;
};
const depth = (token)=>{
    if (token.isPrefix !== true) {
        token.depth = token.isGlobstar ? Infinity : 1;
    }
};
/**
 * Quickly scans a glob pattern and returns an object with a handful of
 * useful properties, like `isGlob`, `path` (the leading non-glob, if it exists),
 * `glob` (the actual pattern), `negated` (true if the path starts with `!` but not
 * with `!(`) and `negatedExtglob` (true if the path starts with `!(`).
 *
 * ```js
 * const pm = require('picomatch');
 * console.log(pm.scan('foo/bar/*.js'));
 * { isGlob: true, input: 'foo/bar/*.js', base: 'foo/bar', glob: '*.js' }
 * ```
 * @param {String} `str`
 * @param {Object} `options`
 * @return {Object} Returns an object with tokens and regex source string.
 * @api public
 */ const scan = (input, options)=>{
    const opts = options || {};
    const length = input.length - 1;
    const scanToEnd = opts.parts === true || opts.scanToEnd === true;
    const slashes = [];
    const tokens = [];
    const parts = [];
    let str = input;
    let index = -1;
    let start = 0;
    let lastIndex = 0;
    let isBrace = false;
    let isBracket = false;
    let isGlob = false;
    let isExtglob = false;
    let isGlobstar = false;
    let braceEscaped = false;
    let backslashes = false;
    let negated = false;
    let negatedExtglob = false;
    let finished = false;
    let braces = 0;
    let prev;
    let code;
    let token = {
        value: "",
        depth: 0,
        isGlob: false
    };
    const eos = ()=>index >= length;
    const peek = ()=>str.charCodeAt(index + 1);
    const advance = ()=>{
        prev = code;
        return str.charCodeAt(++index);
    };
    while(index < length){
        code = advance();
        let next;
        if (code === CHAR_BACKWARD_SLASH) {
            backslashes = token.backslashes = true;
            code = advance();
            if (code === CHAR_LEFT_CURLY_BRACE) {
                braceEscaped = true;
            }
            continue;
        }
        if (braceEscaped === true || code === CHAR_LEFT_CURLY_BRACE) {
            braces++;
            while(eos() !== true && (code = advance())){
                if (code === CHAR_BACKWARD_SLASH) {
                    backslashes = token.backslashes = true;
                    advance();
                    continue;
                }
                if (code === CHAR_LEFT_CURLY_BRACE) {
                    braces++;
                    continue;
                }
                if (braceEscaped !== true && code === CHAR_DOT && (code = advance()) === CHAR_DOT) {
                    isBrace = token.isBrace = true;
                    isGlob = token.isGlob = true;
                    finished = true;
                    if (scanToEnd === true) {
                        continue;
                    }
                    break;
                }
                if (braceEscaped !== true && code === CHAR_COMMA) {
                    isBrace = token.isBrace = true;
                    isGlob = token.isGlob = true;
                    finished = true;
                    if (scanToEnd === true) {
                        continue;
                    }
                    break;
                }
                if (code === CHAR_RIGHT_CURLY_BRACE) {
                    braces--;
                    if (braces === 0) {
                        braceEscaped = false;
                        isBrace = token.isBrace = true;
                        finished = true;
                        break;
                    }
                }
            }
            if (scanToEnd === true) {
                continue;
            }
            break;
        }
        if (code === CHAR_FORWARD_SLASH) {
            slashes.push(index);
            tokens.push(token);
            token = {
                value: "",
                depth: 0,
                isGlob: false
            };
            if (finished === true) continue;
            if (prev === CHAR_DOT && index === start + 1) {
                start += 2;
                continue;
            }
            lastIndex = index + 1;
            continue;
        }
        if (opts.noext !== true) {
            const isExtglobChar = code === CHAR_PLUS || code === CHAR_AT || code === CHAR_ASTERISK || code === CHAR_QUESTION_MARK || code === CHAR_EXCLAMATION_MARK;
            if (isExtglobChar === true && peek() === CHAR_LEFT_PARENTHESES) {
                isGlob = token.isGlob = true;
                isExtglob = token.isExtglob = true;
                finished = true;
                if (code === CHAR_EXCLAMATION_MARK && index === start) {
                    negatedExtglob = true;
                }
                if (scanToEnd === true) {
                    while(eos() !== true && (code = advance())){
                        if (code === CHAR_BACKWARD_SLASH) {
                            backslashes = token.backslashes = true;
                            code = advance();
                            continue;
                        }
                        if (code === CHAR_RIGHT_PARENTHESES) {
                            isGlob = token.isGlob = true;
                            finished = true;
                            break;
                        }
                    }
                    continue;
                }
                break;
            }
        }
        if (code === CHAR_ASTERISK) {
            if (prev === CHAR_ASTERISK) isGlobstar = token.isGlobstar = true;
            isGlob = token.isGlob = true;
            finished = true;
            if (scanToEnd === true) {
                continue;
            }
            break;
        }
        if (code === CHAR_QUESTION_MARK) {
            isGlob = token.isGlob = true;
            finished = true;
            if (scanToEnd === true) {
                continue;
            }
            break;
        }
        if (code === CHAR_LEFT_SQUARE_BRACKET) {
            while(eos() !== true && (next = advance())){
                if (next === CHAR_BACKWARD_SLASH) {
                    backslashes = token.backslashes = true;
                    advance();
                    continue;
                }
                if (next === CHAR_RIGHT_SQUARE_BRACKET) {
                    isBracket = token.isBracket = true;
                    isGlob = token.isGlob = true;
                    finished = true;
                    break;
                }
            }
            if (scanToEnd === true) {
                continue;
            }
            break;
        }
        if (opts.nonegate !== true && code === CHAR_EXCLAMATION_MARK && index === start) {
            negated = token.negated = true;
            start++;
            continue;
        }
        if (opts.noparen !== true && code === CHAR_LEFT_PARENTHESES) {
            isGlob = token.isGlob = true;
            if (scanToEnd === true) {
                while(eos() !== true && (code = advance())){
                    if (code === CHAR_LEFT_PARENTHESES) {
                        backslashes = token.backslashes = true;
                        code = advance();
                        continue;
                    }
                    if (code === CHAR_RIGHT_PARENTHESES) {
                        finished = true;
                        break;
                    }
                }
                continue;
            }
            break;
        }
        if (isGlob === true) {
            finished = true;
            if (scanToEnd === true) {
                continue;
            }
            break;
        }
    }
    if (opts.noext === true) {
        isExtglob = false;
        isGlob = false;
    }
    let base = str;
    let prefix = "";
    let glob = "";
    if (start > 0) {
        prefix = str.slice(0, start);
        str = str.slice(start);
        lastIndex -= start;
    }
    if (base && isGlob === true && lastIndex > 0) {
        base = str.slice(0, lastIndex);
        glob = str.slice(lastIndex);
    } else if (isGlob === true) {
        base = "";
        glob = str;
    } else {
        base = str;
    }
    if (base && base !== "" && base !== "/" && base !== str) {
        if (isPathSeparator(base.charCodeAt(base.length - 1))) {
            base = base.slice(0, -1);
        }
    }
    if (opts.unescape === true) {
        if (glob) glob = utils.removeBackslashes(glob);
        if (base && backslashes === true) {
            base = utils.removeBackslashes(base);
        }
    }
    const state = {
        prefix,
        input,
        start,
        base,
        glob,
        isBrace,
        isBracket,
        isGlob,
        isExtglob,
        isGlobstar,
        negated,
        negatedExtglob
    };
    if (opts.tokens === true) {
        state.maxDepth = 0;
        if (!isPathSeparator(code)) {
            tokens.push(token);
        }
        state.tokens = tokens;
    }
    if (opts.parts === true || opts.tokens === true) {
        let prevIndex;
        for(let idx = 0; idx < slashes.length; idx++){
            const n = prevIndex ? prevIndex + 1 : start;
            const i = slashes[idx];
            const value = input.slice(n, i);
            if (opts.tokens) {
                if (idx === 0 && start !== 0) {
                    tokens[idx].isPrefix = true;
                    tokens[idx].value = prefix;
                } else {
                    tokens[idx].value = value;
                }
                depth(tokens[idx]);
                state.maxDepth += tokens[idx].depth;
            }
            if (idx !== 0 || value !== "") {
                parts.push(value);
            }
            prevIndex = i;
        }
        if (prevIndex && prevIndex + 1 < input.length) {
            const value = input.slice(prevIndex + 1);
            parts.push(value);
            if (opts.tokens) {
                tokens[tokens.length - 1].value = value;
                depth(tokens[tokens.length - 1]);
                state.maxDepth += tokens[tokens.length - 1].depth;
            }
        }
        state.slashes = slashes;
        state.parts = parts;
    }
    return state;
};
module.exports = scan;


/***/ }),

/***/ 68157:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

const path = __webpack_require__(71017);
const win32 = process.platform === "win32";
const { REGEX_BACKSLASH, REGEX_REMOVE_BACKSLASH, REGEX_SPECIAL_CHARS, REGEX_SPECIAL_CHARS_GLOBAL } = __webpack_require__(16647);
exports.isObject = (val)=>val !== null && typeof val === "object" && !Array.isArray(val);
exports.hasRegexChars = (str)=>REGEX_SPECIAL_CHARS.test(str);
exports.isRegexChar = (str)=>str.length === 1 && exports.hasRegexChars(str);
exports.escapeRegex = (str)=>str.replace(REGEX_SPECIAL_CHARS_GLOBAL, "\\$1");
exports.toPosixSlashes = (str)=>str.replace(REGEX_BACKSLASH, "/");
exports.removeBackslashes = (str)=>{
    return str.replace(REGEX_REMOVE_BACKSLASH, (match)=>{
        return match === "\\" ? "" : match;
    });
};
exports.supportsLookbehinds = ()=>{
    const segs = process.version.slice(1).split(".").map(Number);
    if (segs.length === 3 && segs[0] >= 9 || segs[0] === 8 && segs[1] >= 10) {
        return true;
    }
    return false;
};
exports.isWindows = (options)=>{
    if (options && typeof options.windows === "boolean") {
        return options.windows;
    }
    return win32 === true || path.sep === "\\";
};
exports.escapeLast = (input, char, lastIdx)=>{
    const idx = input.lastIndexOf(char, lastIdx);
    if (idx === -1) return input;
    if (input[idx - 1] === "\\") return exports.escapeLast(input, char, idx - 1);
    return `${input.slice(0, idx)}\\${input.slice(idx)}`;
};
exports.removePrefix = (input, state = {})=>{
    let output = input;
    if (output.startsWith("./")) {
        output = output.slice(2);
        state.prefix = "./";
    }
    return output;
};
exports.wrapOutput = (input, state = {}, options = {})=>{
    const prepend = options.contains ? "" : "^";
    const append = options.contains ? "" : "$";
    let output = `${prepend}(?:${input})${append}`;
    if (state.negated === true) {
        output = `(?:^(?!${output}).*$)`;
    }
    return output;
};


/***/ }),

/***/ 9575:
/***/ ((module) => {

"use strict";
/*! queue-microtask. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ 
let promise;
module.exports = typeof queueMicrotask === "function" ? queueMicrotask.bind( false ? 0 : global) : (cb)=>(promise || (promise = Promise.resolve())).then(cb).catch((err)=>setTimeout(()=>{
            throw err;
        }, 0));


/***/ }),

/***/ 30522:
/***/ ((module) => {

"use strict";

function reusify(Constructor) {
    var head = new Constructor();
    var tail = head;
    function get() {
        var current = head;
        if (current.next) {
            head = current.next;
        } else {
            head = new Constructor();
            tail = head;
        }
        current.next = null;
        return current;
    }
    function release(obj) {
        tail.next = obj;
        tail = obj;
    }
    return {
        get: get,
        release: release
    };
}
module.exports = reusify;


/***/ }),

/***/ 23225:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*! run-parallel. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ 
module.exports = runParallel;
const queueMicrotask = __webpack_require__(9575);
function runParallel(tasks, cb) {
    let results, pending, keys;
    let isSync = true;
    if (Array.isArray(tasks)) {
        results = [];
        pending = tasks.length;
    } else {
        keys = Object.keys(tasks);
        results = {};
        pending = keys.length;
    }
    function done(err) {
        function end() {
            if (cb) cb(err, results);
            cb = null;
        }
        if (isSync) queueMicrotask(end);
        else end();
    }
    function each(i, err, result) {
        results[i] = result;
        if (--pending === 0 || err) {
            done(err);
        }
    }
    if (!pending) {
        // empty
        done(null);
    } else if (keys) {
        // object
        keys.forEach(function(key) {
            tasks[key](function(err, result) {
                each(key, err, result);
            });
        });
    } else {
        // array
        tasks.forEach(function(task, i) {
            task(function(err, result) {
                each(i, err, result);
            });
        });
    }
    isSync = false;
}


/***/ }),

/***/ 73382:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*!
 * to-regex-range <https://github.com/micromatch/to-regex-range>
 *
 * Copyright (c) 2015-present, Jon Schlinkert.
 * Released under the MIT License.
 */ 
const isNumber = __webpack_require__(83921);
const toRegexRange = (min, max, options)=>{
    if (isNumber(min) === false) {
        throw new TypeError("toRegexRange: expected the first argument to be a number");
    }
    if (max === void 0 || min === max) {
        return String(min);
    }
    if (isNumber(max) === false) {
        throw new TypeError("toRegexRange: expected the second argument to be a number.");
    }
    let opts = {
        relaxZeros: true,
        ...options
    };
    if (typeof opts.strictZeros === "boolean") {
        opts.relaxZeros = opts.strictZeros === false;
    }
    let relax = String(opts.relaxZeros);
    let shorthand = String(opts.shorthand);
    let capture = String(opts.capture);
    let wrap = String(opts.wrap);
    let cacheKey = min + ":" + max + "=" + relax + shorthand + capture + wrap;
    if (toRegexRange.cache.hasOwnProperty(cacheKey)) {
        return toRegexRange.cache[cacheKey].result;
    }
    let a = Math.min(min, max);
    let b = Math.max(min, max);
    if (Math.abs(a - b) === 1) {
        let result = min + "|" + max;
        if (opts.capture) {
            return `(${result})`;
        }
        if (opts.wrap === false) {
            return result;
        }
        return `(?:${result})`;
    }
    let isPadded = hasPadding(min) || hasPadding(max);
    let state = {
        min,
        max,
        a,
        b
    };
    let positives = [];
    let negatives = [];
    if (isPadded) {
        state.isPadded = isPadded;
        state.maxLen = String(state.max).length;
    }
    if (a < 0) {
        let newMin = b < 0 ? Math.abs(b) : 1;
        negatives = splitToPatterns(newMin, Math.abs(a), state, opts);
        a = state.a = 0;
    }
    if (b >= 0) {
        positives = splitToPatterns(a, b, state, opts);
    }
    state.negatives = negatives;
    state.positives = positives;
    state.result = collatePatterns(negatives, positives, opts);
    if (opts.capture === true) {
        state.result = `(${state.result})`;
    } else if (opts.wrap !== false && positives.length + negatives.length > 1) {
        state.result = `(?:${state.result})`;
    }
    toRegexRange.cache[cacheKey] = state;
    return state.result;
};
function collatePatterns(neg, pos, options) {
    let onlyNegative = filterPatterns(neg, pos, "-", false, options) || [];
    let onlyPositive = filterPatterns(pos, neg, "", false, options) || [];
    let intersected = filterPatterns(neg, pos, "-?", true, options) || [];
    let subpatterns = onlyNegative.concat(intersected).concat(onlyPositive);
    return subpatterns.join("|");
}
function splitToRanges(min, max) {
    let nines = 1;
    let zeros = 1;
    let stop = countNines(min, nines);
    let stops = new Set([
        max
    ]);
    while(min <= stop && stop <= max){
        stops.add(stop);
        nines += 1;
        stop = countNines(min, nines);
    }
    stop = countZeros(max + 1, zeros) - 1;
    while(min < stop && stop <= max){
        stops.add(stop);
        zeros += 1;
        stop = countZeros(max + 1, zeros) - 1;
    }
    stops = [
        ...stops
    ];
    stops.sort(compare);
    return stops;
}
/**
 * Convert a range to a regex pattern
 * @param {Number} `start`
 * @param {Number} `stop`
 * @return {String}
 */ function rangeToPattern(start, stop, options) {
    if (start === stop) {
        return {
            pattern: start,
            count: [],
            digits: 0
        };
    }
    let zipped = zip(start, stop);
    let digits = zipped.length;
    let pattern = "";
    let count = 0;
    for(let i = 0; i < digits; i++){
        let [startDigit, stopDigit] = zipped[i];
        if (startDigit === stopDigit) {
            pattern += startDigit;
        } else if (startDigit !== "0" || stopDigit !== "9") {
            pattern += toCharacterClass(startDigit, stopDigit, options);
        } else {
            count++;
        }
    }
    if (count) {
        pattern += options.shorthand === true ? "\\d" : "[0-9]";
    }
    return {
        pattern,
        count: [
            count
        ],
        digits
    };
}
function splitToPatterns(min, max, tok, options) {
    let ranges = splitToRanges(min, max);
    let tokens = [];
    let start = min;
    let prev;
    for(let i = 0; i < ranges.length; i++){
        let max = ranges[i];
        let obj = rangeToPattern(String(start), String(max), options);
        let zeros = "";
        if (!tok.isPadded && prev && prev.pattern === obj.pattern) {
            if (prev.count.length > 1) {
                prev.count.pop();
            }
            prev.count.push(obj.count[0]);
            prev.string = prev.pattern + toQuantifier(prev.count);
            start = max + 1;
            continue;
        }
        if (tok.isPadded) {
            zeros = padZeros(max, tok, options);
        }
        obj.string = zeros + obj.pattern + toQuantifier(obj.count);
        tokens.push(obj);
        start = max + 1;
        prev = obj;
    }
    return tokens;
}
function filterPatterns(arr, comparison, prefix, intersection, options) {
    let result = [];
    for (let ele of arr){
        let { string } = ele;
        // only push if _both_ are negative...
        if (!intersection && !contains(comparison, "string", string)) {
            result.push(prefix + string);
        }
        // or _both_ are positive
        if (intersection && contains(comparison, "string", string)) {
            result.push(prefix + string);
        }
    }
    return result;
}
/**
 * Zip strings
 */ function zip(a, b) {
    let arr = [];
    for(let i = 0; i < a.length; i++)arr.push([
        a[i],
        b[i]
    ]);
    return arr;
}
function compare(a, b) {
    return a > b ? 1 : b > a ? -1 : 0;
}
function contains(arr, key, val) {
    return arr.some((ele)=>ele[key] === val);
}
function countNines(min, len) {
    return Number(String(min).slice(0, -len) + "9".repeat(len));
}
function countZeros(integer, zeros) {
    return integer - integer % Math.pow(10, zeros);
}
function toQuantifier(digits) {
    let [start = 0, stop = ""] = digits;
    if (stop || start > 1) {
        return `{${start + (stop ? "," + stop : "")}}`;
    }
    return "";
}
function toCharacterClass(a, b, options) {
    return `[${a}${b - a === 1 ? "" : "-"}${b}]`;
}
function hasPadding(str) {
    return /^-?(0+)\d/.test(str);
}
function padZeros(value, tok, options) {
    if (!tok.isPadded) {
        return value;
    }
    let diff = Math.abs(tok.maxLen - String(value).length);
    let relax = options.relaxZeros !== false;
    switch(diff){
        case 0:
            return "";
        case 1:
            return relax ? "0?" : "0";
        case 2:
            return relax ? "0{0,2}" : "00";
        default:
            {
                return relax ? `0{0,${diff}}` : `0{${diff}}`;
            }
    }
}
/**
 * Cache
 */ toRegexRange.cache = {};
toRegexRange.clearCache = ()=>toRegexRange.cache = {};
/**
 * Expose `toRegexRange`
 */ module.exports = toRegexRange;


/***/ }),

/***/ 52451:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(80489)


/***/ }),

/***/ 254:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  N: () => (/* binding */ useCombineMotionValues)
});

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/value/index.mjs
var es_value = __webpack_require__(86550);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs
var MotionConfigContext = __webpack_require__(95248);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/use-constant.mjs
var use_constant = __webpack_require__(34349);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/value/use-motion-value.mjs





/**
 * Creates a `MotionValue` to track the state and velocity of a value.
 *
 * Usually, these are created automatically. For advanced use-cases, like use with `useTransform`, you can create `MotionValue`s externally and pass them into the animated component via the `style` prop.
 *
 * ```jsx
 * export const MyComponent = () => {
 *   const scale = useMotionValue(1)
 *
 *   return <motion.div style={{ scale }} />
 * }
 * ```
 *
 * @param initial - The initial state.
 *
 * @public
 */
function useMotionValue(initial) {
    const value = (0,use_constant/* useConstant */.h)(() => (0,es_value/* motionValue */.B)(initial));
    /**
     * If this motion value is being used in static mode, like on
     * the Framer canvas, force components to rerender when the motion
     * value is updated.
     */
    const { isStatic } = (0,react_.useContext)(MotionConfigContext/* MotionConfigContext */._);
    if (isStatic) {
        const [, setLatest] = (0,react_.useState)(initial);
        (0,react_.useEffect)(() => value.on("change", setLatest), []);
    }
    return value;
}



// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var use_isomorphic_effect = __webpack_require__(60381);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/frameloop/frame.mjs + 2 modules
var frameloop_frame = __webpack_require__(89195);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/value/use-combine-values.mjs




function useCombineMotionValues(values, combineValues) {
    /**
     * Initialise the returned motion value. This remains the same between renders.
     */
    const value = useMotionValue(combineValues());
    /**
     * Create a function that will update the template motion value with the latest values.
     * This is pre-bound so whenever a motion value updates it can schedule its
     * execution in Framesync. If it's already been scheduled it won't be fired twice
     * in a single frame.
     */
    const updateValue = () => value.set(combineValues());
    /**
     * Synchronously update the motion value with the latest values during the render.
     * This ensures that within a React render, the styles applied to the DOM are up-to-date.
     */
    updateValue();
    /**
     * Subscribe to all motion values found within the template. Whenever any of them change,
     * schedule an update.
     */
    (0,use_isomorphic_effect/* useIsomorphicLayoutEffect */.L)(() => {
        const scheduleUpdate = () => frameloop_frame/* frame */.Wi.update(updateValue, false, true);
        const subscriptions = values.map((v) => v.on("change", scheduleUpdate));
        return () => {
            subscriptions.forEach((unsubscribe) => unsubscribe());
            (0,frameloop_frame/* cancelFrame */.Pn)(updateValue);
        };
    });
    return value;
}




/***/ }),

/***/ 4311:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ useMotionTemplate)
/* harmony export */ });
/* harmony import */ var _use_combine_values_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(254);
/* harmony import */ var _utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55583);



/**
 * Combine multiple motion values into a new one using a string template literal.
 *
 * ```jsx
 * import {
 *   motion,
 *   useSpring,
 *   useMotionValue,
 *   useMotionTemplate
 * } from "framer-motion"
 *
 * function Component() {
 *   const shadowX = useSpring(0)
 *   const shadowY = useMotionValue(0)
 *   const shadow = useMotionTemplate`drop-shadow(${shadowX}px ${shadowY}px 20px rgba(0,0,0,0.3))`
 *
 *   return <motion.div style={{ filter: shadow }} />
 * }
 * ```
 *
 * @public
 */
function useMotionTemplate(fragments, ...values) {
    /**
     * Create a function that will build a string from the latest motion values.
     */
    const numFragments = fragments.length;
    function buildValue() {
        let output = ``;
        for (let i = 0; i < numFragments; i++) {
            output += fragments[i];
            const value = values[i];
            if (value) {
                output += (0,_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__/* .isMotionValue */ .i)(value) ? value.get() : value;
            }
        }
        return output;
    }
    return (0,_use_combine_values_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useCombineMotionValues */ .N)(values.filter(_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_0__/* .isMotionValue */ .i), buildValue);
}




/***/ }),

/***/ 54997:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  v: () => (/* binding */ useScroll)
});

// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/value/index.mjs
var value = __webpack_require__(86550);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/use-constant.mjs
var use_constant = __webpack_require__(34349);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/errors.mjs
var errors = __webpack_require__(47279);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/utils/resolve-element.mjs


function resolveElements(elements, scope, selectorCache) {
    var _a;
    if (typeof elements === "string") {
        let root = document;
        if (scope) {
            (0,errors/* invariant */.k)(Boolean(scope.current), "Scope provided, but no element detected.");
            root = scope.current;
        }
        if (selectorCache) {
            (_a = selectorCache[elements]) !== null && _a !== void 0 ? _a : (selectorCache[elements] = root.querySelectorAll(elements));
            elements = selectorCache[elements];
        }
        else {
            elements = root.querySelectorAll(elements);
        }
    }
    else if (elements instanceof Element) {
        elements = [elements];
    }
    /**
     * Return an empty array
     */
    return Array.from(elements || []);
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/resize/handle-element.mjs


const resizeHandlers = new WeakMap();
let observer;
function getElementSize(target, borderBoxSize) {
    if (borderBoxSize) {
        const { inlineSize, blockSize } = borderBoxSize[0];
        return { width: inlineSize, height: blockSize };
    }
    else if (target instanceof SVGElement && "getBBox" in target) {
        return target.getBBox();
    }
    else {
        return {
            width: target.offsetWidth,
            height: target.offsetHeight,
        };
    }
}
function notifyTarget({ target, contentRect, borderBoxSize, }) {
    var _a;
    (_a = resizeHandlers.get(target)) === null || _a === void 0 ? void 0 : _a.forEach((handler) => {
        handler({
            target,
            contentSize: contentRect,
            get size() {
                return getElementSize(target, borderBoxSize);
            },
        });
    });
}
function notifyAll(entries) {
    entries.forEach(notifyTarget);
}
function createResizeObserver() {
    if (typeof ResizeObserver === "undefined")
        return;
    observer = new ResizeObserver(notifyAll);
}
function resizeElement(target, handler) {
    if (!observer)
        createResizeObserver();
    const elements = resolveElements(target);
    elements.forEach((element) => {
        let elementHandlers = resizeHandlers.get(element);
        if (!elementHandlers) {
            elementHandlers = new Set();
            resizeHandlers.set(element, elementHandlers);
        }
        elementHandlers.add(handler);
        observer === null || observer === void 0 ? void 0 : observer.observe(element);
    });
    return () => {
        elements.forEach((element) => {
            const elementHandlers = resizeHandlers.get(element);
            elementHandlers === null || elementHandlers === void 0 ? void 0 : elementHandlers.delete(handler);
            if (!(elementHandlers === null || elementHandlers === void 0 ? void 0 : elementHandlers.size)) {
                observer === null || observer === void 0 ? void 0 : observer.unobserve(element);
            }
        });
    };
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/resize/handle-window.mjs
const windowCallbacks = new Set();
let windowResizeHandler;
function createWindowResizeHandler() {
    windowResizeHandler = () => {
        const size = {
            width: window.innerWidth,
            height: window.innerHeight,
        };
        const info = {
            target: window,
            size,
            contentSize: size,
        };
        windowCallbacks.forEach((callback) => callback(info));
    };
    window.addEventListener("resize", windowResizeHandler);
}
function resizeWindow(callback) {
    windowCallbacks.add(callback);
    if (!windowResizeHandler)
        createWindowResizeHandler();
    return () => {
        windowCallbacks.delete(callback);
        if (!windowCallbacks.size && windowResizeHandler) {
            windowResizeHandler = undefined;
        }
    };
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/resize/index.mjs



function resize(a, b) {
    return typeof a === "function" ? resizeWindow(a) : resizeElement(a, b);
}



// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/progress.mjs
var progress = __webpack_require__(98976);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/velocity-per-second.mjs
var velocity_per_second = __webpack_require__(27429);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/scroll/info.mjs



/**
 * A time in milliseconds, beyond which we consider the scroll velocity to be 0.
 */
const maxElapsed = 50;
const createAxisInfo = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0,
});
const createScrollInfo = () => ({
    time: 0,
    x: createAxisInfo(),
    y: createAxisInfo(),
});
const keys = {
    x: {
        length: "Width",
        position: "Left",
    },
    y: {
        length: "Height",
        position: "Top",
    },
};
function updateAxisInfo(element, axisName, info, time) {
    const axis = info[axisName];
    const { length, position } = keys[axisName];
    const prev = axis.current;
    const prevTime = info.time;
    axis.current = element["scroll" + position];
    axis.scrollLength = element["scroll" + length] - element["client" + length];
    axis.offset.length = 0;
    axis.offset[0] = 0;
    axis.offset[1] = axis.scrollLength;
    axis.progress = (0,progress/* progress */.Y)(0, axis.scrollLength, axis.current);
    const elapsed = time - prevTime;
    axis.velocity =
        elapsed > maxElapsed
            ? 0
            : (0,velocity_per_second/* velocityPerSecond */.R)(axis.current - prev, elapsed);
}
function updateScrollInfo(element, info, time) {
    updateAxisInfo(element, "x", info, time);
    updateAxisInfo(element, "y", info, time);
    info.time = time;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/scroll/offsets/inset.mjs
function calcInset(element, container) {
    let inset = { x: 0, y: 0 };
    let current = element;
    while (current && current !== container) {
        if (current instanceof HTMLElement) {
            inset.x += current.offsetLeft;
            inset.y += current.offsetTop;
            current = current.offsetParent;
        }
        else if (current instanceof SVGGraphicsElement && "getBBox" in current) {
            const { top, left } = current.getBBox();
            inset.x += left;
            inset.y += top;
            /**
             * Assign the next parent element as the <svg /> tag.
             */
            while (current && current.tagName !== "svg") {
                current = current.parentNode;
            }
        }
    }
    return inset;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/scroll/offsets/presets.mjs
const ScrollOffset = {
    Enter: [
        [0, 1],
        [1, 1],
    ],
    Exit: [
        [0, 0],
        [1, 0],
    ],
    Any: [
        [1, 0],
        [0, 1],
    ],
    All: [
        [0, 0],
        [1, 1],
    ],
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/scroll/offsets/edge.mjs
const namedEdges = {
    start: 0,
    center: 0.5,
    end: 1,
};
function resolveEdge(edge, length, inset = 0) {
    let delta = 0;
    /**
     * If we have this edge defined as a preset, replace the definition
     * with the numerical value.
     */
    if (namedEdges[edge] !== undefined) {
        edge = namedEdges[edge];
    }
    /**
     * Handle unit values
     */
    if (typeof edge === "string") {
        const asNumber = parseFloat(edge);
        if (edge.endsWith("px")) {
            delta = asNumber;
        }
        else if (edge.endsWith("%")) {
            edge = asNumber / 100;
        }
        else if (edge.endsWith("vw")) {
            delta = (asNumber / 100) * document.documentElement.clientWidth;
        }
        else if (edge.endsWith("vh")) {
            delta = (asNumber / 100) * document.documentElement.clientHeight;
        }
        else {
            edge = asNumber;
        }
    }
    /**
     * If the edge is defined as a number, handle as a progress value.
     */
    if (typeof edge === "number") {
        delta = length * edge;
    }
    return inset + delta;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/scroll/offsets/offset.mjs


const defaultOffset = [0, 0];
function resolveOffset(offset, containerLength, targetLength, targetInset) {
    let offsetDefinition = Array.isArray(offset) ? offset : defaultOffset;
    let targetPoint = 0;
    let containerPoint = 0;
    if (typeof offset === "number") {
        /**
         * If we're provided offset: [0, 0.5, 1] then each number x should become
         * [x, x], so we default to the behaviour of mapping 0 => 0 of both target
         * and container etc.
         */
        offsetDefinition = [offset, offset];
    }
    else if (typeof offset === "string") {
        offset = offset.trim();
        if (offset.includes(" ")) {
            offsetDefinition = offset.split(" ");
        }
        else {
            /**
             * If we're provided a definition like "100px" then we want to apply
             * that only to the top of the target point, leaving the container at 0.
             * Whereas a named offset like "end" should be applied to both.
             */
            offsetDefinition = [offset, namedEdges[offset] ? offset : `0`];
        }
    }
    targetPoint = resolveEdge(offsetDefinition[0], targetLength, targetInset);
    containerPoint = resolveEdge(offsetDefinition[1], containerLength);
    return targetPoint - containerPoint;
}



// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/interpolate.mjs + 3 modules
var interpolate = __webpack_require__(23028);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/offsets/default.mjs + 1 modules
var offsets_default = __webpack_require__(29076);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/scroll/offsets/index.mjs






const point = { x: 0, y: 0 };
function resolveOffsets(container, info, options) {
    let { offset: offsetDefinition = ScrollOffset.All } = options;
    const { target = container, axis = "y" } = options;
    const lengthLabel = axis === "y" ? "height" : "width";
    const inset = target !== container ? calcInset(target, container) : point;
    /**
     * Measure the target and container. If they're the same thing then we
     * use the container's scrollWidth/Height as the target, from there
     * all other calculations can remain the same.
     */
    const targetSize = target === container
        ? { width: container.scrollWidth, height: container.scrollHeight }
        : { width: target.clientWidth, height: target.clientHeight };
    const containerSize = {
        width: container.clientWidth,
        height: container.clientHeight,
    };
    /**
     * Reset the length of the resolved offset array rather than creating a new one.
     * TODO: More reusable data structures for targetSize/containerSize would also be good.
     */
    info[axis].offset.length = 0;
    /**
     * Populate the offset array by resolving the user's offset definition into
     * a list of pixel scroll offets.
     */
    let hasChanged = !info[axis].interpolate;
    const numOffsets = offsetDefinition.length;
    for (let i = 0; i < numOffsets; i++) {
        const offset = resolveOffset(offsetDefinition[i], containerSize[lengthLabel], targetSize[lengthLabel], inset[axis]);
        if (!hasChanged && offset !== info[axis].interpolatorOffsets[i]) {
            hasChanged = true;
        }
        info[axis].offset[i] = offset;
    }
    /**
     * If the pixel scroll offsets have changed, create a new interpolator function
     * to map scroll value into a progress.
     */
    if (hasChanged) {
        info[axis].interpolate = (0,interpolate/* interpolate */.s)(info[axis].offset, (0,offsets_default/* defaultOffset */.Y)(offsetDefinition));
        info[axis].interpolatorOffsets = [...info[axis].offset];
    }
    info[axis].progress = info[axis].interpolate(info[axis].current);
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/scroll/on-scroll-handler.mjs



function measure(container, target = container, info) {
    /**
     * Find inset of target within scrollable container
     */
    info.x.targetOffset = 0;
    info.y.targetOffset = 0;
    if (target !== container) {
        let node = target;
        while (node && node !== container) {
            info.x.targetOffset += node.offsetLeft;
            info.y.targetOffset += node.offsetTop;
            node = node.offsetParent;
        }
    }
    info.x.targetLength =
        target === container ? target.scrollWidth : target.clientWidth;
    info.y.targetLength =
        target === container ? target.scrollHeight : target.clientHeight;
    info.x.containerLength = container.clientWidth;
    info.y.containerLength = container.clientHeight;
}
function createOnScrollHandler(element, onScroll, info, options = {}) {
    return {
        measure: () => measure(element, options.target, info),
        update: (time) => {
            updateScrollInfo(element, info, time);
            if (options.offset || options.target) {
                resolveOffsets(element, info, options);
            }
        },
        notify: () => onScroll(info),
    };
}



// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/frameloop/frame.mjs + 2 modules
var frameloop_frame = __webpack_require__(89195);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/scroll/track.mjs





const scrollListeners = new WeakMap();
const resizeListeners = new WeakMap();
const onScrollHandlers = new WeakMap();
const getEventTarget = (element) => element === document.documentElement ? window : element;
function scrollInfo(onScroll, { container = document.documentElement, ...options } = {}) {
    let containerHandlers = onScrollHandlers.get(container);
    /**
     * Get the onScroll handlers for this container.
     * If one isn't found, create a new one.
     */
    if (!containerHandlers) {
        containerHandlers = new Set();
        onScrollHandlers.set(container, containerHandlers);
    }
    /**
     * Create a new onScroll handler for the provided callback.
     */
    const info = createScrollInfo();
    const containerHandler = createOnScrollHandler(container, onScroll, info, options);
    containerHandlers.add(containerHandler);
    /**
     * Check if there's a scroll event listener for this container.
     * If not, create one.
     */
    if (!scrollListeners.has(container)) {
        const measureAll = () => {
            for (const handler of containerHandlers)
                handler.measure();
        };
        const updateAll = () => {
            for (const handler of containerHandlers) {
                handler.update(frameloop_frame.frameData.timestamp);
            }
        };
        const notifyAll = () => {
            for (const handler of containerHandlers)
                handler.notify();
        };
        const listener = () => {
            frameloop_frame/* frame */.Wi.read(measureAll, false, true);
            frameloop_frame/* frame */.Wi.update(updateAll, false, true);
            frameloop_frame/* frame */.Wi.update(notifyAll, false, true);
        };
        scrollListeners.set(container, listener);
        const target = getEventTarget(container);
        window.addEventListener("resize", listener, { passive: true });
        if (container !== document.documentElement) {
            resizeListeners.set(container, resize(container, listener));
        }
        target.addEventListener("scroll", listener, { passive: true });
    }
    const listener = scrollListeners.get(container);
    frameloop_frame/* frame */.Wi.read(listener, false, true);
    return () => {
        var _a;
        (0,frameloop_frame/* cancelFrame */.Pn)(listener);
        /**
         * Check if we even have any handlers for this container.
         */
        const currentHandlers = onScrollHandlers.get(container);
        if (!currentHandlers)
            return;
        currentHandlers.delete(containerHandler);
        if (currentHandlers.size)
            return;
        /**
         * If no more handlers, remove the scroll listener too.
         */
        const scrollListener = scrollListeners.get(container);
        scrollListeners.delete(container);
        if (scrollListener) {
            getEventTarget(container).removeEventListener("scroll", scrollListener);
            (_a = resizeListeners.get(container)) === null || _a === void 0 ? void 0 : _a();
            window.removeEventListener("resize", scrollListener);
        }
    };
}



// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var use_isomorphic_effect = __webpack_require__(60381);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/value/use-scroll.mjs







function refWarning(name, ref) {
    (0,errors/* warning */.K)(Boolean(!ref || ref.current), `You have defined a ${name} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`);
}
const createScrollMotionValues = () => ({
    scrollX: (0,value/* motionValue */.B)(0),
    scrollY: (0,value/* motionValue */.B)(0),
    scrollXProgress: (0,value/* motionValue */.B)(0),
    scrollYProgress: (0,value/* motionValue */.B)(0),
});
function useScroll({ container, target, layoutEffect = true, ...options } = {}) {
    const values = (0,use_constant/* useConstant */.h)(createScrollMotionValues);
    const useLifecycleEffect = layoutEffect
        ? use_isomorphic_effect/* useIsomorphicLayoutEffect */.L
        : react_.useEffect;
    useLifecycleEffect(() => {
        refWarning("target", target);
        refWarning("container", container);
        return scrollInfo(({ x, y }) => {
            values.scrollX.set(x.current);
            values.scrollXProgress.set(x.progress);
            values.scrollY.set(y.current);
            values.scrollYProgress.set(y.progress);
        }, {
            ...options,
            container: (container === null || container === void 0 ? void 0 : container.current) || undefined,
            target: (target === null || target === void 0 ? void 0 : target.current) || undefined,
        });
    }, []);
    return values;
}




/***/ }),

/***/ 61772:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  H: () => (/* binding */ useTransform)
});

// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/interpolate.mjs + 3 modules
var interpolate = __webpack_require__(23028);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/transform.mjs


const isCustomValueType = (v) => {
    return typeof v === "object" && v.mix;
};
const getMixer = (v) => (isCustomValueType(v) ? v.mix : undefined);
function transform(...args) {
    const useImmediate = !Array.isArray(args[0]);
    const argOffset = useImmediate ? 0 : -1;
    const inputValue = args[0 + argOffset];
    const inputRange = args[1 + argOffset];
    const outputRange = args[2 + argOffset];
    const options = args[3 + argOffset];
    const interpolator = (0,interpolate/* interpolate */.s)(inputRange, outputRange, {
        mixer: getMixer(outputRange[0]),
        ...options,
    });
    return useImmediate ? interpolator(inputValue) : interpolator;
}



// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/value/use-combine-values.mjs + 1 modules
var use_combine_values = __webpack_require__(254);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/use-constant.mjs
var use_constant = __webpack_require__(34349);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/value/use-transform.mjs




function useTransform(input, inputRangeOrTransformer, outputRange, options) {
    const transformer = typeof inputRangeOrTransformer === "function"
        ? inputRangeOrTransformer
        : transform(inputRangeOrTransformer, outputRange, options);
    return Array.isArray(input)
        ? useListTransform(input, transformer)
        : useListTransform([input], ([latest]) => transformer(latest));
}
function useListTransform(values, transformer) {
    const latest = (0,use_constant/* useConstant */.h)(() => []);
    return (0,use_combine_values/* useCombineMotionValues */.N)(values, () => {
        latest.length = 0;
        const numValues = values.length;
        for (let i = 0; i < numValues; i++) {
            latest[i] = values[i].get();
        }
        return transformer(latest);
    });
}




/***/ })

};
;