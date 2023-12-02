import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    default: 'user@test.com'
  })
  email: string;

  @ApiProperty({
    default: 'Robert Smith'
  })
  fullName: string;

  @ApiProperty({
    default: 'myPassword123'
  })
  password: string;
}
