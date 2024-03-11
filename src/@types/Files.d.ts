export interface FilesProps {
    data: {
        files: fileProps[]
    };
}

export interface fileProps {
    orders: [];
    usuario: string;
    status: string;
    contains: [];
    orders_errors: [];
    company: string;
    createdAt: string;
    updatedAt: string;
    idERP_File: number;
    path: string;
}
