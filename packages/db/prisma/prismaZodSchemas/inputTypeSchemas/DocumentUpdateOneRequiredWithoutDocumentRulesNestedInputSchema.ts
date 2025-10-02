import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentCreateWithoutDocumentRulesInputSchema } from './DocumentCreateWithoutDocumentRulesInputSchema';
import { DocumentUncheckedCreateWithoutDocumentRulesInputSchema } from './DocumentUncheckedCreateWithoutDocumentRulesInputSchema';
import { DocumentCreateOrConnectWithoutDocumentRulesInputSchema } from './DocumentCreateOrConnectWithoutDocumentRulesInputSchema';
import { DocumentUpsertWithoutDocumentRulesInputSchema } from './DocumentUpsertWithoutDocumentRulesInputSchema';
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema';
import { DocumentUpdateToOneWithWhereWithoutDocumentRulesInputSchema } from './DocumentUpdateToOneWithWhereWithoutDocumentRulesInputSchema';
import { DocumentUpdateWithoutDocumentRulesInputSchema } from './DocumentUpdateWithoutDocumentRulesInputSchema';
import { DocumentUncheckedUpdateWithoutDocumentRulesInputSchema } from './DocumentUncheckedUpdateWithoutDocumentRulesInputSchema';

export const DocumentUpdateOneRequiredWithoutDocumentRulesNestedInputSchema: z.ZodType<Prisma.DocumentUpdateOneRequiredWithoutDocumentRulesNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => DocumentCreateWithoutDocumentRulesInputSchema), z.lazy(() => DocumentUncheckedCreateWithoutDocumentRulesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DocumentCreateOrConnectWithoutDocumentRulesInputSchema).optional(),
  upsert: z.lazy(() => DocumentUpsertWithoutDocumentRulesInputSchema).optional(),
  connect: z.lazy(() => DocumentWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => DocumentUpdateToOneWithWhereWithoutDocumentRulesInputSchema), z.lazy(() => DocumentUpdateWithoutDocumentRulesInputSchema), z.lazy(() => DocumentUncheckedUpdateWithoutDocumentRulesInputSchema) ]).optional(),
});

export default DocumentUpdateOneRequiredWithoutDocumentRulesNestedInputSchema;
