import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Philanthropy } from 'src/entities/Philanthropy';
import { Repository } from 'typeorm';
// import { SavePhilanthropyDto } from './dtos/philanthropy.dto';

@Injectable()
export class PhilanthropyService {
  constructor(
    @InjectRepository(Philanthropy)
    private readonly philanthropyRepository: Repository<Philanthropy>,
  ) {}

  async getPhilanthropies() {
    return this.philanthropyRepository.find();
  }

  async getPhilanthropyById(id: number) {
    return this.philanthropyRepository.findOne({
      where: { philanthropyId: id },
    });
  }

  //   async createPhilanthropy(data: SavePhilanthropyDto) {
  //     return this.philanthropyRepository.save(data);
  //   }

  //   async updatePhilanthropy(id: number, data: SavePhilanthropyDto) {
  //     return this.philanthropyRepository.update(id, data);
  //   }

  //   async deletePhilanthropy(id: number) {
  //     return this.philanthropyRepository.delete(id);
  //   }
}
