// @ts-ignore
global.requestIdleCallback = global.requestIdleCallback || function (cb: Function): void {
  cb();
};
