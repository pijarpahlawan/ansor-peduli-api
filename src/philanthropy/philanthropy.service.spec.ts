import { Test, TestingModule } from '@nestjs/testing';
import { PhilanthropyService } from './philanthropy.service';

describe('PhilanthropyService', () => {
  let service: PhilanthropyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhilanthropyService],
    }).compile();

    service = module.get<PhilanthropyService>(PhilanthropyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
