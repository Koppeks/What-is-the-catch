import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlockKindSchema } from './BlockKindSchema';

export const NestedEnumBlockKindFilterSchema: z.ZodType<Prisma.NestedEnumBlockKindFilter> = z.strictObject({
  equals: z.lazy(() => BlockKindSchema).optional(),
  in: z.lazy(() => BlockKindSchema).array().optional(),
  notIn: z.lazy(() => BlockKindSchema).array().optional(),
  not: z.union([ z.lazy(() => BlockKindSchema), z.lazy(() => NestedEnumBlockKindFilterSchema) ]).optional(),
});

export default NestedEnumBlockKindFilterSchema;
