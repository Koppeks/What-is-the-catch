import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TypeRequestSchema } from './TypeRequestSchema';
import { NestedEnumTypeRequestWithAggregatesFilterSchema } from './NestedEnumTypeRequestWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumTypeRequestFilterSchema } from './NestedEnumTypeRequestFilterSchema';

export const EnumTypeRequestWithAggregatesFilterSchema: z.ZodType<Prisma.EnumTypeRequestWithAggregatesFilter> = z.object({
  equals: z.lazy(() => TypeRequestSchema).optional(),
  in: z.lazy(() => TypeRequestSchema).array().optional(),
  notIn: z.lazy(() => TypeRequestSchema).array().optional(),
  not: z.union([ z.lazy(() => TypeRequestSchema),z.lazy(() => NestedEnumTypeRequestWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumTypeRequestFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumTypeRequestFilterSchema).optional()
}).strict() as z.ZodType<Prisma.EnumTypeRequestWithAggregatesFilter>;

export default EnumTypeRequestWithAggregatesFilterSchema;
