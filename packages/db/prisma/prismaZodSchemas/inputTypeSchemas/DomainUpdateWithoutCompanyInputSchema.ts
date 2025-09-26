import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { ServiceDomainUpdateManyWithoutDomainNestedInputSchema } from './ServiceDomainUpdateManyWithoutDomainNestedInputSchema';

export const DomainUpdateWithoutCompanyInputSchema: z.ZodType<Prisma.DomainUpdateWithoutCompanyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  host: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  note: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  ServiceDomain: z.lazy(() => ServiceDomainUpdateManyWithoutDomainNestedInputSchema).optional()
}).strict() as z.ZodType<Prisma.DomainUpdateWithoutCompanyInput>;

export default DomainUpdateWithoutCompanyInputSchema;
