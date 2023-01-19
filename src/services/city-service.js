const { CityRepository } = require('../repository/index')

class CityService {
    constructor(){
        this.CityRepository=new CityRepository();
    }

    async createCity(data){
        try {
            const city = await this.cityRepository.createCity(data)
            return city
        } catch (error) {
            console.log("Something went wrong at service layer")
            throw {error}
        }
    }

    async deleteCity(cityId){
        try {
            const response = await this.cityRepository.deleteCity(cityId)
            return response
        } catch (error) {
            console.log("Something went wrong at service layer")
            throw {error}
        }
    }

    async updateCity(){
        try {
            const city = await this.cityRepository.updateCity(data)
            return city
        } catch (error) {
            console.log("Something went wrong at service layer")
            throw {error}
        }
    }

    async getCity(){
        try {
            const city = await this.cityRepository.getCity(data)
            return city
        } catch (error) {
            console.log("Something went wrong at service layer")
            throw {error}
        }
    }

}

module.exports= CityRepository