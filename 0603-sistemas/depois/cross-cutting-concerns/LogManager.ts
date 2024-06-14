class LogManager {
    info(msg: string) {
        console.log(`Log: ${msg}`);
    }

    error(msg: string, error: any) {
        console.log(`${msg}: ${error.message}`);
    }
}

export default LogManager;