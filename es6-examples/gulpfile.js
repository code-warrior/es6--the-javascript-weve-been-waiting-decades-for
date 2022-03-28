const { watch } = require(`gulp`),
    browserSync = require(`browser-sync`),
    reload = browserSync.reload;

let browserPref = `default`;

/**
 * To use either of the browsers listed below that match an installed browser in your
 * machine, invoke Gulp as follows:
 *
 *    gulp safari serve
 *    gulp firefox serve
 *    gulp chrome serve
 *    gulp opera serve
 *    gulp edge serve
 *    gulp ie serve
 */

async function safari () {
    browserPref = `safari`;
}

async function firefox () {
    browserPref = `firefox`;
}

async function chrome () {
    browserPref = `google chrome`;
}

async function opera () {
    browserPref = `opera`;
}

async function edge () {
    browserPref = `microsoft-edge`;
}

let serve = () => {
    browserSync({
        browser: browserPref,
        server: `./`
    });

    watch([`js/*.js`, `./*.html`]).on(`change`, reload);
};

exports.safari = safari;
exports.firefox = firefox;
exports.chrome = chrome;
exports.opera = opera;
exports.edge = edge;
exports.serve = serve;
