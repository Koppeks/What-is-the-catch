import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AvailableRolesSchema } from './AvailableRolesSchema';
import { NestedEnumAvailableRolesWithAggregatesFilterSchema } from './NestedEnumAvailableRolesWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumAvailableRolesFilterSchema } from './NestedEnumAvailableRolesFilterSchema';

export const EnumAvailableRolesWithAggregatesFilterSchema: z.ZodType<Prisma.EnumAvailableRolesWithAggregatesFilter> = z.strictObject({
  equals: z.lazy(() => AvailableRolesSchema).optional(),
  in: z.lazy(() => AvailableRolesSchema).array().optional(),
  notIn: z.lazy(() => AvailableRolesSchema).array().optional(),
  not: z.union([ z.lazy(() => AvailableRolesSchema), z.lazy(() => NestedEnumAvailableRolesWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumAvailableRolesFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumAvailableRolesFilterSchema).optional(),
});

export default EnumAvailableRolesWithAggregatesFilterSchema;
