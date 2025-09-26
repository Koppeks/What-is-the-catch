import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerStateSchema } from './TriggerStateSchema';

export const NestedEnumTriggerStateFilterSchema: z.ZodType<Prisma.NestedEnumTriggerStateFilter> = z.object({
  equals: z.lazy(() => TriggerStateSchema).optional(),
  in: z.lazy(() => TriggerStateSchema).array().optional(),
  notIn: z.lazy(() => TriggerStateSchema).array().optional(),
  not: z.union([ z.lazy(() => TriggerStateSchema),z.lazy(() => NestedEnumTriggerStateFilterSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.NestedEnumTriggerStateFilter>;

export default NestedEnumTriggerStateFilterSchema;
