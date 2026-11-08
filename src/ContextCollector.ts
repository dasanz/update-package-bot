export class ContextCollector {
    constructor() {
        this.getDependencyUpdates();
        this.selectDependency();
        this.collectDocumentation();
    }

    private getDependencyUpdates() {}

    private selectDependency() {}

    private collectDocumentation() {}

    public getCollection() {
        return {
            libraryName: 'someLibraryName',
            version: '1.0.0',
            documentation: 'someDocumentation',
        }
    }
}