export class ContextCollector {
    constructor() {}

    getDependencyUpdates() {}

    selectDependency() {}

    collectDocumentation() {}

    getCollection() {
        return {
            libraryName: 'someLibraryName',
            version: '1.0.0',
            documentation: 'someDocumentation',
        }
    }
}