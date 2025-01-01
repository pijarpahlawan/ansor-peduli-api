import { applyDecorators } from '@nestjs/common';
import {
  ApiInternalServerErrorResponse,
  ApiOperation,
  ApiResponse,
  ApiResponseOptions,
} from '@nestjs/swagger';

export function Docs(
  summary?: string,
  successResponseOptions?: ApiResponseOptions,
) {
  return applyDecorators(
    ApiOperation({ summary: summary || '' }),
    ApiResponse(successResponseOptions),
    ApiInternalServerErrorResponse({
      description: 'The example of a data structure went an error occurs',
      schema: {
        type: 'object',
        properties: {
          statusCode: {
            example: 500,
          },
          message: {
            example: 'Something went wrong',
          },
          error: {
            example: 'Internal Server Error',
          },
        },
      },
    }),
  );
}
