import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  v2 as cloudinary,
  UploadApiErrorResponse,
  UploadApiResponse,
} from 'cloudinary';
import {} from '@nestjs/platform-express';

@Injectable()
export class CloudinaryService {
  constructor(private readonly configService: ConfigService) {
    cloudinary.config({
      cloud_name: this.configService.get('CLOUDINARY_CLOUD_NAME'),
      api_key: this.configService.get('CLOUDINARY_API_KEY'),
      api_secret: this.configService.get('CLOUDINARY_API_SECRET'),
    });
  }

  getCloudinaryInstance() {
    return cloudinary;
  }

  async uploadImage(
    folder: string,
    file: Express.Multer.File,
  ): Promise<UploadApiResponse> {
    return new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          { folder: folder },
          (
            error: UploadApiErrorResponse | null,
            result: UploadApiResponse | undefined,
          ) => {
            if (error) {
              reject(new BadRequestException('Failed to upload image'));
            }
            resolve(result);
          },
        )
        .end(file.buffer);
    });
  }
}
