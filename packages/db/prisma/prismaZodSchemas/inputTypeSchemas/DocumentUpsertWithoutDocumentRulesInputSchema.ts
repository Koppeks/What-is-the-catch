import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentUpdateWithoutDocumentRulesInputSchema } from './DocumentUpdateWithoutDocumentRulesInputSchema';
import { DocumentUncheckedUpdateWithoutDocumentRulesInputSchema } from './DocumentUncheckedUpdateWithoutDocumentRulesInputSchema';
import { DocumentCreateWithoutDocumentRulesInputSchema } from './DocumentCreateWithoutDocumentRulesInputSchema';
import { DocumentUncheckedCreateWithoutDocumentRulesInputSchema } from './DocumentUncheckedCreateWithoutDocumentRulesInputSchema';
import { DocumentWhereInputSchema } from './DocumentWhereInputSchema';

export const DocumentUpsertWithoutDocumentRulesInputSchema: z.ZodType<Prisma.DocumentUpsertWithoutDocumentRulesInput> = z.strictObject({
  update: z.union([ z.lazy(() => DocumentUpdateWithoutDocumentRulesInputSchema), z.lazy(() => DocumentUncheckedUpdateWithoutDocumentRulesInputSchema) ]),
  create: z.union([ z.lazy(() => DocumentCreateWithoutDocumentRulesInputSchema), z.lazy(() => DocumentUncheckedCreateWithoutDocumentRulesInputSchema) ]),
  where: z.lazy(() => DocumentWhereInputSchema).optional(),
});

export default DocumentUpsertWithoutDocumentRulesInputSchema;
