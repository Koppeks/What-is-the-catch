import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AvailableRolesSchema } from './AvailableRolesSchema';

export const NestedEnumAvailableRolesFilterSchema: z.ZodType<Prisma.NestedEnumAvailableRolesFilter> = z.object({
  equals: z.lazy(() => AvailableRolesSchema).optional(),
  in: z.lazy(() => AvailableRolesSchema).array().optional(),
  notIn: z.lazy(() => AvailableRolesSchema).array().optional(),
  not: z.union([ z.lazy(() => AvailableRolesSchema),z.lazy(() => NestedEnumAvailableRolesFilterSchema) ]).optional(),
}).strict() as z.ZodType<Prisma.NestedEnumAvailableRolesFilter>;

export default NestedEnumAvailableRolesFilterSchema;
