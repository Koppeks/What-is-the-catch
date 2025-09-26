import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerSourceSchema } from './TriggerSourceSchema';
import { NestedEnumTriggerSourceWithAggregatesFilterSchema } from './NestedEnumTriggerSourceWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumTriggerSourceFilterSchema } from './NestedEnumTriggerSourceFilterSchema';

export const EnumTriggerSourceWithAggregatesFilterSchema: z.ZodType<Prisma.EnumTriggerSourceWithAggregatesFilter> = z.object({
  equals: z.lazy(() => TriggerSourceSchema).optional(),
  in: z.lazy(() => TriggerSourceSchema).array().optional(),
  notIn: z.lazy(() => TriggerSourceSchema).array().optional(),
  not: z.union([ z.lazy(() => TriggerSourceSchema),z.lazy(() => NestedEnumTriggerSourceWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumTriggerSourceFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumTriggerSourceFilterSchema).optional()
}).strict() as z.ZodType<Prisma.EnumTriggerSourceWithAggregatesFilter>;

export default EnumTriggerSourceWithAggregatesFilterSchema;
