export enum DeployState {
    initStart = 'Started initialization',
    initErr = 'Failed to initialize',
    fetchStart = 'Started fetching updates',
    fetchEnd = 'Fetched updates successfully',
    fetchErr = 'Error while fetching',
    buildStart = 'Started building',
    buildEnd = 'Builded successfully',
    buildErr = 'Error while building',
    testStart = 'Started testing',
    testEnd = 'Tested successfully',
    testErr = 'Error while testing',
    deployStart = 'Started deploying',
    deployEnd = 'Deployed successfully',
    deployErr = 'Error while deploying',
    runEnd = 'Ended successfully',
    runErr = 'Ended with an error',
    removeEnd = 'Removed successfully',
    removeErr = 'Error while removing',
}