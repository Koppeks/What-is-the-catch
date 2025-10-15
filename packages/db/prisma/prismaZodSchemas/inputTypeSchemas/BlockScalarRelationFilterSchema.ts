import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlockWhereInputSchema } from './BlockWhereInputSchema';

export const BlockScalarRelationFilterSchema: z.ZodType<Prisma.BlockScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => BlockWhereInputSchema).optional(),
  isNot: z.lazy(() => BlockWhereInputSchema).optional(),
});

export default BlockScalarRelationFilterSchema;
