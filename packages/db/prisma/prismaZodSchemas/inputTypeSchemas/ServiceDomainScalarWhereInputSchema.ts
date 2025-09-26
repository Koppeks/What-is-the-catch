import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const ServiceDomainScalarWhereInputSchema: z.ZodType<Prisma.ServiceDomainScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ServiceDomainScalarWhereInputSchema),z.lazy(() => ServiceDomainScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ServiceDomainScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ServiceDomainScalarWhereInputSchema),z.lazy(() => ServiceDomainScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  serviceId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  domainId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  pathPattern: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict() as z.ZodType<Prisma.ServiceDomainScalarWhereInput>;

export default ServiceDomainScalarWhereInputSchema;
