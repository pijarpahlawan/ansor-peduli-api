import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Philanthropy } from 'src/entities/Philanthropy';
import { DataSource, Repository } from 'typeorm';
import { PhilanthropyMetadataDto } from './dtos/philanthropy.dto';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Injectable()
export class PhilanthropyService {
  constructor(
    @InjectRepository(Philanthropy)
    private readonly philanthropyRepository: Repository<Philanthropy>,
    private readonly dataSource: DataSource,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  async getPhilanthropies() {
    return this.philanthropyRepository.find();
  }

  async getPhilanthropyById(id: number) {
    return this.philanthropyRepository.findOne({
      where: { philanthropyId: id },
    });
  }

  async createPhilanthropy(
    banner: Express.Multer.File,
    metadata: PhilanthropyMetadataDto,
  ) {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      let bannerPath = null;

      if (banner) {
        const result = await this.cloudinaryService.uploadImage(
          'banners',
          banner,
        );
        bannerPath = result.secure_url;
      }

      const philanthropy = new Philanthropy();
      philanthropy.initiator = metadata.initiator;
      philanthropy.categoryId = metadata.categoryId;
      philanthropy.name = metadata.name;
      philanthropy.bannerPath = bannerPath;
      philanthropy.description = metadata.description;
      philanthropy.target = metadata.target;
      philanthropy.deadline = metadata.deadline;

      const createdPhilanthropy = await queryRunner.manager.save(philanthropy);
      await queryRunner.commitTransaction();

      return createdPhilanthropy;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }

  async updatePhilanthropy(
    id: number,
    banner: Express.Multer.File,
    metadata: PhilanthropyMetadataDto,
  ) {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const philanthropy = await this.philanthropyRepository.findOne({
        where: { philanthropyId: id },
      });

      if (!philanthropy) {
        throw new NotFoundException('Program not found');
      }

      let bannerPath = philanthropy.bannerPath;

      if (banner) {
        const result = await this.cloudinaryService.uploadImage(
          'banners',
          banner,
        );
        bannerPath = result.secure_url;
      }

      philanthropy.initiator = metadata.initiator;
      philanthropy.categoryId = metadata.categoryId;
      philanthropy.name = metadata.name;
      philanthropy.bannerPath = bannerPath;
      philanthropy.description = metadata.description;
      philanthropy.target = metadata.target;
      philanthropy.deadline = metadata.deadline;

      await queryRunner.manager.save(philanthropy);

      const reloadedPhilanthropy = await this.philanthropyRepository.findOne({
        where: { philanthropyId: id },
      });

      await queryRunner.commitTransaction();

      return reloadedPhilanthropy;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }

  async deletePhilanthropy(id: number) {
    return this.philanthropyRepository.delete({
      philanthropyId: id,
    });
  }
}
