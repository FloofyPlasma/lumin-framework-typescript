interface ReplicatedStorage extends Instance {
    Client: Folder & {
        TS: Folder
    };

    Shared: Folder & {
        TS: Folder & {
            controllers: Instance;
        }
    }
}
