import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceSelectSchema } from '../inputTypeSchemas/ServiceSelectSchema';
import { ServiceIncludeSchema } from '../inputTypeSchemas/ServiceIncludeSchema';

export const ServiceArgsSchema: z.ZodType<Prisma.ServiceDefaultArgs> = z.object({
  select: z.lazy(() => ServiceSelectSchema).optional(),
  include: z.lazy(() => ServiceIncludeSchema).optional(),
}).strict();

export default ServiceArgsSchema;
