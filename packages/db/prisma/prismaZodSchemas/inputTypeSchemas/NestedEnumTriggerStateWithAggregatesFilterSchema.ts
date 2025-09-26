import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerStateSchema } from './TriggerStateSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumTriggerStateFilterSchema } from './NestedEnumTriggerStateFilterSchema';

export const NestedEnumTriggerStateWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumTriggerStateWithAggregatesFilter> = z.object({
  equals: z.lazy(() => TriggerStateSchema).optional(),
  in: z.lazy(() => TriggerStateSchema).array().optional(),
  notIn: z.lazy(() => TriggerStateSchema).array().optional(),
  not: z.union([ z.lazy(() => TriggerStateSchema),z.lazy(() => NestedEnumTriggerStateWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumTriggerStateFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumTriggerStateFilterSchema).optional()
}).strict() as z.ZodType<Prisma.NestedEnumTriggerStateWithAggregatesFilter>;

export default NestedEnumTriggerStateWithAggregatesFilterSchema;
