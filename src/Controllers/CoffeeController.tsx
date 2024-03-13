interface CoffeeList {
    _id: string,
    name: string,
    description: string,
    image_url: string,
    link: string,
}

export async function getCapsuleCoffeeList(): Promise<CoffeeList[]> {
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            try {
                const response = await fetch('http://localhost:3000/coffee/capsule');
                if (!response.ok) {
                    throw new Error('Failed to fetch coffee list');
                }
                const coffeeList: CoffeeList[] = await response.json();
                console.log(coffeeList);
                resolve(coffeeList);
            } catch (error) {
                console.log('Error:', error.message);
                reject(error);
            }
        }, 5000); // Wait for 5 seconds before making the request
    });
}
    //     const coffeeList = await axios.get('http://localhost:3000/coffee/capsule');
    //     console.log(coffeeList.data)
    //     return coffeeList.data;
    // } catch (error) {
    //     if (error.response) {
    //         // The request was made and the server responded with a status code
    //         // that falls out of the range of 2xx
    //         console.log(error.response.data);
    //         console.log(error.response.status);
    //         console.log(error.response.headers);
    //     } else if (error.request) {
    //         // The request was made but no response was received
    //         // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    //         // http.ClientRequest in node.js
    //         console.log(error.request);
    //     } else {
    //         // Something happened in setting up the request that triggered an Error
    //         console.log('Error', error.message);
    //     }
    //     console.log(error.config);
    //     throw error
    // }
// }


