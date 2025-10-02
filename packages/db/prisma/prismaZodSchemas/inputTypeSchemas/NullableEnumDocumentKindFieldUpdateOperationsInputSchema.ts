import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentKindSchema } from './DocumentKindSchema';

export const NullableEnumDocumentKindFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumDocumentKindFieldUpdateOperationsInput> = z.strictObject({
  set: z.lazy(() => DocumentKindSchema).optional().nullable(),
});

export default NullableEnumDocumentKindFieldUpdateOperationsInputSchema;
