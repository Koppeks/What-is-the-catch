import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlockKindSchema } from './BlockKindSchema';
import { NestedEnumBlockKindFilterSchema } from './NestedEnumBlockKindFilterSchema';

export const EnumBlockKindFilterSchema: z.ZodType<Prisma.EnumBlockKindFilter> = z.strictObject({
  equals: z.lazy(() => BlockKindSchema).optional(),
  in: z.lazy(() => BlockKindSchema).array().optional(),
  notIn: z.lazy(() => BlockKindSchema).array().optional(),
  not: z.union([ z.lazy(() => BlockKindSchema), z.lazy(() => NestedEnumBlockKindFilterSchema) ]).optional(),
});

export default EnumBlockKindFilterSchema;
