import { Test, TestingModule } from '@nestjs/testing';
import { UtilsService } from './utils.service';

describe('UtilsService', () => {
  let service: UtilsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UtilsService],
    }).compile();

    service = module.get<UtilsService>(UtilsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getClosestToZero', () => {
    it('should throw an error if array content is mistyped', () => {
      expect(_ => service.getClosestToZero(<any>['a', 'b'])).toThrow();
      expect(_ => service.getClosestToZero(<any>[1, 'b'])).toThrow();
    });

    it('should return 0 if array is nil or empty', () => {
      expect(service.getClosestToZero(null)).toEqual(0);
      expect(service.getClosestToZero(undefined)).toEqual(0);
      expect(service.getClosestToZero([])).toEqual(0);
    });

    it('should return closest number to 0 from given array (positive and negative numbers)', () => {
      expect(service.getClosestToZero([8, 5, 10])).toEqual(5);
      expect(service.getClosestToZero([5, 4, -9, 6, -10, -1, 8])).toEqual(-1);
    });

    it('should return closest number to 0 from given array (positive number is returned if the same interval is found with a negative number)', () => {
      expect(service.getClosestToZero([8, 2, 3, -2])).toEqual(2);
    });

    it('should return closest number to 0 from given array (positive number is returned if the same interval is found with a negative number - position is inverted)', () => {
      expect(service.getClosestToZeroLo([8, -2, 3, 2])).toEqual(2);
    });
  });

  describe('getClosestToZeroLo', () => {
    it('should throw an error if array content is mistyped', () => {
      expect(_ => service.getClosestToZeroLo(<any>['a', 'b'])).toThrow();
      expect(_ => service.getClosestToZeroLo(<any>[1, 'b'])).toThrow();
    });

    it('should return 0 if array is nil or empty', () => {
      expect(service.getClosestToZeroLo(null)).toEqual(0);
      expect(service.getClosestToZeroLo(undefined)).toEqual(0);
      expect(service.getClosestToZeroLo([])).toEqual(0);
    });

    it('should return closest number to 0 from given array (positive and negative numbers)', () => {
      expect(service.getClosestToZeroLo([8, 5, 10])).toEqual(5);
      expect(service.getClosestToZeroLo([5, 4, -9, 6, -10, -1, 8])).toEqual(-1);
    });

    it('should return closest number to 0 from given array (positive number is returned if the same interval is found with a negative number)', () => {
      expect(service.getClosestToZeroLo([8, 2, 3, -2])).toEqual(2);
    });

    it('should return closest number to 0 from given array (positive number is returned if the same interval is found with a negative number - position is inverted)', () => {
      expect(service.getClosestToZeroLo([8, -2, 3, 2])).toEqual(2);
    });
  });
});
