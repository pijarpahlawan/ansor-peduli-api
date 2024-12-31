import { Test, TestingModule } from '@nestjs/testing';
import { PhilanthropyController } from './philanthropy.controller';

describe('PhilanthropyController', () => {
  let controller: PhilanthropyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhilanthropyController],
    }).compile();

    controller = module.get<PhilanthropyController>(PhilanthropyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
