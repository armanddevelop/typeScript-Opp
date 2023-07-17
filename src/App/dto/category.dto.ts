import {
  IsUrl,
  IsNotEmpty,
  Length,
  IsEnum,
  IsDate,
  validateOrReject,
  IsOptional,
} from 'class-validator';
import { AccessType, Category } from '../models/category.model';

export interface UpdateCategoryDto extends Partial<Omit<Category, 'id'>> {}
export interface ICreateCategoryDto
  extends Omit<Category, 'id' | 'updatedAt'> {}
export class CreateCategoryDto implements ICreateCategoryDto {
  @IsNotEmpty()
  @Length(4, 280)
  name!: string;
  @IsUrl()
  @IsNotEmpty()
  image!: string;
  @IsNotEmpty()
  @IsEnum(AccessType)
  @IsOptional()
  access?: AccessType | undefined;
  @IsDate()
  creationAt!: Date;
}
(async () => {
  try {
    const dto = new CreateCategoryDto();
    dto.name = 'a';
    await validateOrReject(dto);
  } catch (error) {
    console.error('Error ', error);
  }
})();
