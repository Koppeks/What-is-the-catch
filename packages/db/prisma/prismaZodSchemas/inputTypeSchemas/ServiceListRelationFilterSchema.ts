import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServiceWhereInputSchema } from './ServiceWhereInputSchema';

export const ServiceListRelationFilterSchema: z.ZodType<Prisma.ServiceListRelationFilter> = z.object({
  every: z.lazy(() => ServiceWhereInputSchema).optional(),
  some: z.lazy(() => ServiceWhereInputSchema).optional(),
  none: z.lazy(() => ServiceWhereInputSchema).optional()
}).strict() as z.ZodType<Prisma.ServiceListRelationFilter>;

export default ServiceListRelationFilterSchema;
