import { IFooCepAPI } from "./Interfaces";

export default class MockCepApi implements IFooCepAPI {
  async getAddressByCEP(cep: string, number: number): Promise<string> {
    return `O endereço mockado para o "CEP:${cep}, n°:${number}" é "endereço mockado foo"`;
  }

  async getCepByAddress(address: string, number: number): Promise<string> {
    return `O CEP mockado para: "${address}, n°: ${number}" é "CEP mockado baz"`;
  }
}