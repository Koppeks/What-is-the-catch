import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ServiceWhereInputSchema } from './ServiceWhereInputSchema';

export const ServiceScalarRelationFilterSchema: z.ZodType<Prisma.ServiceScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => ServiceWhereInputSchema).optional(),
  isNot: z.lazy(() => ServiceWhereInputSchema).optional(),
});

export default ServiceScalarRelationFilterSchema;
