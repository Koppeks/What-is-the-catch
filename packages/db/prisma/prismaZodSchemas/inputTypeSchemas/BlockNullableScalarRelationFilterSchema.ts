import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlockWhereInputSchema } from './BlockWhereInputSchema';

export const BlockNullableScalarRelationFilterSchema: z.ZodType<Prisma.BlockNullableScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => BlockWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => BlockWhereInputSchema).optional().nullable(),
});

export default BlockNullableScalarRelationFilterSchema;
