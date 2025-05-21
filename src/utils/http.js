const { VITE_ENV_NAME_PROD, MODE } = import.meta.env

class Http {

    constructor() {
        this.currentEnv = MODE
    }

    async useGET(url, useRealData = false, query = '') {
        if(this.currentEnv === VITE_ENV_NAME_PROD || useRealData) {
            try {
                const res = await fetch(url)
                const { data } = await res.json()

                return data
            } catch(err) {
                console.log('error', err)
            }
        } else {
            try {
                //! GET Mock Data
                // return mockData[url]
            } catch(err) {
                //! GET Mock Data
                console.log('error', err)
            }
        }
    }

    async usePOST(url, body = '', useRealData = false) {
        if(this.currentEnv === VITE_ENV_NAME_PROD || useRealData) {
            try {
                const res = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body
                })

                return await res.json()
            } catch(err) {
                console.log('error', err)
            }
        } else {
            try {
                //! POST Mock Data
                // return mockData[url]
            } catch(err) {
                //! POST Mock Data
                console.log('error', err)
            }
        }
    }
}

export default Http