import { IFooCepAPI } from './Interfaces';

class CepService {
  private readonly cepApi: IFooCepAPI;

  constructor(cepApi: IFooCepAPI) {
    this.cepApi = cepApi;
  }

  addressByCep(cep: string, num: number) {
    return this.cepApi.getAddressByCEP(cep, num);
  }

  cepByAddress(address: string, num: number) {
    return this.cepApi.getCepByAddress(address, num);
  }
}

export default CepService;