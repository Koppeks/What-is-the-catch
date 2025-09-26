import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServiceWhereInputSchema } from './ServiceWhereInputSchema';

export const ServiceScalarRelationFilterSchema: z.ZodType<Prisma.ServiceScalarRelationFilter> = z.object({
  is: z.lazy(() => ServiceWhereInputSchema).optional(),
  isNot: z.lazy(() => ServiceWhereInputSchema).optional()
}).strict() as z.ZodType<Prisma.ServiceScalarRelationFilter>;

export default ServiceScalarRelationFilterSchema;
