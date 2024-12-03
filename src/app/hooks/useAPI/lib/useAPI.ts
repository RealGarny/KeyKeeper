export const useAPI = () => {
    const handleSendToAPI = async () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.5) {
                    resolve(true);
                }
                reject({ data: { message: "Сервис временно недоступен" } });
            }, 2000);
        });
    };

    return {
        handleSendToAPI,
    };
};
