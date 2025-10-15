import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlockWhereInputSchema } from './BlockWhereInputSchema';

export const BlockListRelationFilterSchema: z.ZodType<Prisma.BlockListRelationFilter> = z.strictObject({
  every: z.lazy(() => BlockWhereInputSchema).optional(),
  some: z.lazy(() => BlockWhereInputSchema).optional(),
  none: z.lazy(() => BlockWhereInputSchema).optional(),
});

export default BlockListRelationFilterSchema;
