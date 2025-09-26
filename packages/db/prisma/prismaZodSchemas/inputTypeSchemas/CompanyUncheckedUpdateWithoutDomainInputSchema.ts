import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { ServiceUncheckedUpdateManyWithoutCompanyNestedInputSchema } from './ServiceUncheckedUpdateManyWithoutCompanyNestedInputSchema';
import { CompanyAliasUncheckedUpdateManyWithoutCompanyNestedInputSchema } from './CompanyAliasUncheckedUpdateManyWithoutCompanyNestedInputSchema';

export const CompanyUncheckedUpdateWithoutDomainInputSchema: z.ZodType<Prisma.CompanyUncheckedUpdateWithoutDomainInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  displayName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  websiteUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  countryCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Service: z.lazy(() => ServiceUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  CompanyAlias: z.lazy(() => CompanyAliasUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional()
}).strict() as z.ZodType<Prisma.CompanyUncheckedUpdateWithoutDomainInput>;

export default CompanyUncheckedUpdateWithoutDomainInputSchema;
