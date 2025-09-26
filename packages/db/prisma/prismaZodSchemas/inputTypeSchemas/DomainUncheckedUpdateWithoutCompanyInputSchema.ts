import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { ServiceDomainUncheckedUpdateManyWithoutDomainNestedInputSchema } from './ServiceDomainUncheckedUpdateManyWithoutDomainNestedInputSchema';

export const DomainUncheckedUpdateWithoutCompanyInputSchema: z.ZodType<Prisma.DomainUncheckedUpdateWithoutCompanyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  host: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  note: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  ServiceDomain: z.lazy(() => ServiceDomainUncheckedUpdateManyWithoutDomainNestedInputSchema).optional()
}).strict() as z.ZodType<Prisma.DomainUncheckedUpdateWithoutCompanyInput>;

export default DomainUncheckedUpdateWithoutCompanyInputSchema;
