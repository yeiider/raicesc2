import axios, {AxiosResponse} from 'axios';

const API_KEY = process.env.SECRET_WISPHUB_API_KEY;
const API_BASE_URL = process.env.SECRET_WISPHUB_API_BASE_URL;
const JAMUNDI_API_URL = process.env.SECRET_ISPGO_API_BASE_URL;
const JAMUNDI_API_TOKEN = process.env.SECRET_ISPGO_API_TOKEN;

export interface ClienteResponse {
    data: any;
    status: number;
}

export class ClienteService {
    private static async buscarJamundi(cedula: string): Promise<ClienteResponse> {
        try {
            const response: AxiosResponse = await axios.get(
                `${JAMUNDI_API_URL}/invoice/search?q=${cedula}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${JAMUNDI_API_TOKEN}`,
                        'Accept': 'application/json'
                    }
                }
            );
            console.log(response.data);
            return {
                data: response.data,
                status: response.status
            };
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('Error en búsqueda Jamundí:', error.response?.data);
                throw {
                    message: error.response?.data || 'Error en la búsqueda en Jamundí',
                    status: error.response?.status || 500
                };
            }
            throw {
                message: 'Error interno del servidor Jamundí',
                status: 500
            };
        }
    }

    private static async buscarGeneral(cedula: string): Promise<ClienteResponse> {
        try {
            const response: AxiosResponse = await axios.get(
                `${API_BASE_URL}/clientes/?cedula=${cedula}`,
                {
                    headers: {
                        'Authorization': `Api-Key ${API_KEY}`,
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }
            );

            return {
                data: response.data,
                status: response.status
            };
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('Error en búsqueda general:', error.response?.data);
                throw {
                    message: error.response?.data || 'Error en la búsqueda general',
                    status: error.response?.status || 500
                };
            }
            throw {
                message: 'Error interno del servidor general',
                status: 500
            };
        }
    }

    static async buscarPorCedula(cedula: string, ciudad: string): Promise<ClienteResponse> {
        if (!cedula) {
            throw {
                message: 'La cédula es requerida',
                status: 400
            };
        }

        if (ciudad.toLowerCase() === 'jamundi') {
            return await this.buscarJamundi(cedula);
        } else {
            return await this.buscarGeneral(cedula);
        }
    }
}
