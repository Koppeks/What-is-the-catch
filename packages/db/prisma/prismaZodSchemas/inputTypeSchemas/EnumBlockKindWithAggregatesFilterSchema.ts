import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BlockKindSchema } from './BlockKindSchema';
import { NestedEnumBlockKindWithAggregatesFilterSchema } from './NestedEnumBlockKindWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumBlockKindFilterSchema } from './NestedEnumBlockKindFilterSchema';

export const EnumBlockKindWithAggregatesFilterSchema: z.ZodType<Prisma.EnumBlockKindWithAggregatesFilter> = z.strictObject({
  equals: z.lazy(() => BlockKindSchema).optional(),
  in: z.lazy(() => BlockKindSchema).array().optional(),
  notIn: z.lazy(() => BlockKindSchema).array().optional(),
  not: z.union([ z.lazy(() => BlockKindSchema), z.lazy(() => NestedEnumBlockKindWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumBlockKindFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumBlockKindFilterSchema).optional(),
});

export default EnumBlockKindWithAggregatesFilterSchema;
