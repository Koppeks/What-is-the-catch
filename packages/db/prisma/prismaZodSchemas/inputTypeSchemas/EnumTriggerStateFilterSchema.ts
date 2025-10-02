import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TriggerStateSchema } from './TriggerStateSchema';
import { NestedEnumTriggerStateFilterSchema } from './NestedEnumTriggerStateFilterSchema';

export const EnumTriggerStateFilterSchema: z.ZodType<Prisma.EnumTriggerStateFilter> = z.strictObject({
  equals: z.lazy(() => TriggerStateSchema).optional(),
  in: z.lazy(() => TriggerStateSchema).array().optional(),
  notIn: z.lazy(() => TriggerStateSchema).array().optional(),
  not: z.union([ z.lazy(() => TriggerStateSchema), z.lazy(() => NestedEnumTriggerStateFilterSchema) ]).optional(),
});

export default EnumTriggerStateFilterSchema;
