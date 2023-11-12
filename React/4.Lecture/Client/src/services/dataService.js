const baseUrl = "http://localhost:3030/jsonstore/users/";

export const getAll = async () =>{
   try {
    const response = await fetch(baseUrl);
    const result = await response.json();
    const data = Object.values(result);
    return data;
   } catch (error) {
    console.log(error);
   }
   return [];
};

export const getUser = async (userId) =>{
    try {
        const response = await fetch(`${baseUrl}${userId}`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
    }
}

export const createUser = async (data) => {
    const body = {
        "firstName": data.firstName,
        "lastName": data.lastName,
        "email": data.email,
        "phoneNumber": data.phoneNumber,
        "imageUrl": data.imageUrl,
        "createdAt": new Date().toISOString(),
        "updatedAt": new Date().toISOString(),
        "address":{
          "country": data.country,
          "city": data.city,
          "street": data.street,
          "streetNumber": data.streetNumber
        }
      }
    try {
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
    }
}

export const deleteUser = async(userId)=>{
    try {
        const response = await fetch(baseUrl+userId, {
            method: 'DELETE'
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
    }
}

export const editUser = async(userId, data) => {
    const body = {
        "firstName": data.firstName,
        "lastName": data.lastName,
        "email": data.email,
        "phoneNumber": data.phoneNumber,
        "imageUrl": data.imageUrl,
        "createdAt": new Date().toISOString(),
        "updatedAt": new Date().toISOString(),
        "address":{
          "country": data.country,
          "city": data.city,
          "street": data.street,
          "streetNumber": data.streetNumber
        }
      }
    try {
        const response = await fetch(baseUrl + userId, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
    }
}

/* updatedAt= {user.updatedAt}
                        imageUrl= {user.imageUrl}
                        country= {user.adress.country}
                        city= {user.adress.city}
                        street= {user.adress.street}
                        streetNumber= {user.adress.streetNumber} */