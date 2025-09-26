import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AvailableRolesSchema } from './AvailableRolesSchema';
import { NestedEnumAvailableRolesFilterSchema } from './NestedEnumAvailableRolesFilterSchema';

export const EnumAvailableRolesFilterSchema: z.ZodType<Prisma.EnumAvailableRolesFilter> = z.object({
  equals: z.lazy(() => AvailableRolesSchema).optional(),
  in: z.lazy(() => AvailableRolesSchema).array().optional(),
  notIn: z.lazy(() => AvailableRolesSchema).array().optional(),
  not: z.union([ z.lazy(() => AvailableRolesSchema),z.lazy(() => NestedEnumAvailableRolesFilterSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.EnumAvailableRolesFilter>;

export default EnumAvailableRolesFilterSchema;
