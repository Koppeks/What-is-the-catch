import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';

export const ServiceDomainUpdateManyMutationInputSchema: z.ZodType<Prisma.ServiceDomainUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pathPattern: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict() as z.ZodType<Prisma.ServiceDomainUpdateManyMutationInput>;

export default ServiceDomainUpdateManyMutationInputSchema;
